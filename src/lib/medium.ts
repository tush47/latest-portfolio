import Parser from "rss-parser";
import { site } from "@/data/content";

export type MediumPost = {
  title: string;
  link: string;
  date: string;
  excerpt: string;
  categories: string[];
};

type MediumItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  isoDate?: string;
  contentSnippet?: string;
  content?: string;
  categories?: string[];
  "content:encoded"?: string;
};

function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function makeExcerpt(item: MediumItem) {
  const raw =
    item.contentSnippet ||
    item["content:encoded"] ||
    item.content ||
    "";
  const text = stripHtml(raw);
  if (text.length <= 180) return text;
  return `${text.slice(0, 177).trim()}…`;
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  const parser = new Parser<Record<string, unknown>, MediumItem>({
    customFields: {
      item: ["content:encoded", "categories"],
    },
  });

  try {
    const feed = await parser.parseURL(site.mediumFeed);
    return (feed.items ?? [])
      .filter((item) => item.title && item.link)
      .map((item) => {
        const dateSource = item.isoDate || item.pubDate;
        const date = dateSource
          ? new Date(dateSource).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : "";

        return {
          title: item.title!,
          link: item.link!,
          date,
          excerpt: makeExcerpt(item),
          categories: item.categories ?? [],
        };
      });
  } catch {
    return [];
  }
}
