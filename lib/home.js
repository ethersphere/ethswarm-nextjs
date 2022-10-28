import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const homePath = join(process.cwd(), "content/home.md");

export function getHome() {
  const fileContents = fs.readFileSync(homePath, "utf8");
  const { data } = matter(fileContents);

  return data;
}
