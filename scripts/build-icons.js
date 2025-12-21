const fs = require("fs").promises;
const { camelCase } = require("camelcase");
const { rimraf } = require("rimraf");
const { transform: svgr } = require("@svgr/core");
const babel = require("@babel/core");
const { dirname } = require("path");

let transform = async (svg, componentName, format) => {
  const { transform: svgrTransform } = require("@svgr/core");
  
  let component = await svgrTransform(
    svg,
    { 
      ref: true, 
      titleProp: true,
      plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier']
    },
    { componentName }
  );
  
  let { code } = await babel.transformAsync(component, {
    plugins: [
      [require("@babel/plugin-transform-react-jsx"), { 
        useBuiltIns: true,
        throwIfNamespace: false
      }],
    ],
  });

  if (format === "esm") {
    return code.replace('import * as React from "react";', 'import React from "react";');
  }

  return code
    .replace('import * as React from "react";', 'const React = require("react");')
    .replace("export default", "module.exports =");
};

function toCamelCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
    .replace(/^(.)/, (_, char) => char.toLowerCase());
}

function toPascalCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
    .replace(/^(.)/, (_, char) => char.toUpperCase());
}

async function getIcons() {
  let files = await fs.readdir(`./icons/svg`);

  files = files.filter((file) => file.endsWith(".svg"));

  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`./icons/svg/${file}`, "utf8"),
      componentName: `${toPascalCase(file.replace(/\.svg$/, ""))}Icon`,
    }))
  );
}

function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName }) => {
      let extension = includeExtension ? ".js" : "";
      if (format === "esm") {
        return `export { default as ${componentName} } from './${componentName}${extension}'`;
      }
      return `module.exports.${componentName} = require("./${componentName}${extension}")`;
    })
    .join("\n");
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true });
  await fs.writeFile(file, text, "utf8");
}

async function ensureWriteJson(file, json) {
  await ensureWrite(file, JSON.stringify(json, null, 2));
}

async function buildIcons(format) {
  let outDir = `./icons/components`;
  if (format === "cjs") {
    outDir += "/cjs";
  }

  let icons = await getIcons();

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      let content = await transform(svg, componentName, format);
      let types = `import * as React from 'react';\ndeclare function ${componentName}(props: React.ComponentProps<'svg'>): JSX.Element;\nexport default ${componentName};\n`;

      return [
        ensureWrite(`${outDir}/${componentName}.js`, content),
        ...(types
          ? [ensureWrite(`${outDir.replace('/cjs', '')}/${componentName}.d.ts`, types)]
          : []),
      ];
    })
  );

  await ensureWrite(`${outDir}/index.js`, exportAll(icons, format));

  if (format === 'esm') {
    await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, "esm", false));
  }
}

async function main() {
  const cjsPackageJson = { main: "index.js", sideEffects: false };
  const esmPackageJson = { type: "module", main: "index.js", sideEffects: false };

  console.log(`Building package...`);

  await Promise.all([rimraf(`./icons/components/*`)]);

  await Promise.all([
    buildIcons("cjs"),
    buildIcons("esm"),
    ensureWriteJson(`./icons/components/cjs/package.json`, cjsPackageJson),
    ensureWriteJson(`./icons/components/package.json`, esmPackageJson),
  ]);

  return console.log(`Finished building package.`);
}

main();
