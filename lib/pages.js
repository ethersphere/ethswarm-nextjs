import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
const glob = require("glob");

const pagesPath = join(process.cwd(), "content/pages");

//
export function getPageBySlug(slug) {
  const fullPath = join(pagesPath, slug.join("/") + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return data;
}

export function getAllPages() {
  const slugs = getPageSlugs();
  const pages = slugs.map((slug) => getPageBySlug(slug));

  return pages;
}

export function getPageSlugs() {
  return glob
    .sync("**/*.md", { cwd: pagesPath })
    .map((slug) => slug.replace(".md", ""));
}
