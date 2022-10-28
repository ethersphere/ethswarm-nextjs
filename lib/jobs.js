import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const jobsPath = join(process.cwd(), "content/jobs");

export function getJobBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(jobsPath, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllJobs() {
  const slugs = getJobsSlugs();
  const posts = slugs.map((slug) =>
    getJobBySlug(slug, ["job", "meta", "slug"])
  );

  return posts;
}

export function getJobsSlugs() {
  return fs.readdirSync(jobsPath);
}
