import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const faqsPath = join(process.cwd(), "content/faqs");
const indexPath = join(process.cwd(), "data/faqs/index.json");

const CATEGORY_LABELS = {
  community: "Community",
  general: "General",
  "bzz-token": "BZZ Token",
  "running-a-bee-node": "Running a Bee Node",
  staking: "Staking",
  "swarm-desktop": "Swarm Desktop",
  "bee-full-node-operators": "Bee Full Node Operators",
};

export function getAllFaqsGrouped() {
  const indexData = JSON.parse(fs.readFileSync(indexPath, "utf8"));

  const grouped = [];

  for (const category of indexData.categories) {
    const entriesForCategory = indexData.faqs.filter(
      (f) => f.category === category
    );

    const items = entriesForCategory
      .map((entry) => {
        const filePath = join(faqsPath, `${entry.slug}.md`);
        if (!fs.existsSync(filePath)) return null;

        const { content } = matter(fs.readFileSync(filePath, "utf8"));
        // Strip the leading H1 heading — title is already in index.json
        const body = content.replace(/^#\s+.+\n*/m, "").trim();

        return {
          title: entry.title,
          body,
        };
      })
      .filter(Boolean);

    if (items.length > 0) {
      grouped.push({
        category,
        label: CATEGORY_LABELS[category] || category,
        items,
      });
    }
  }

  return grouped;
}
