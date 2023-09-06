import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const eventsPath = join(process.cwd(), "content/events");

export function getEventBySlug(slug) {
  const fullPath = join(eventsPath, slug);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return data;
}

export function getAllEvents() {
  const slugs = getEventSlugs();
  const events = slugs
    .map((slug) => getEventBySlug(slug))
    .sort((event1, event2) =>
      event1.start_date < event2.start_date ? "-1" : "1"
    )
    .map((event) => ({
      title: event.title,
      href: event.href ?? "",
      add_to_calendar: event.add_to_calendar ?? "",
    }));

  return events;
}

export function getEventSlugs() {
  return fs.readdirSync(eventsPath);
}
