import html from "remark-html";
import { remark } from "remark";
import remarkExternalLinks from "remark-external-links";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkExternalLinks)
    .use(html, {
      sanitize: false,
    })
    .process(markdown);
  return result.toString();
}
