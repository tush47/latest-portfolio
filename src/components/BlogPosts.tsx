"use client";

import { Text } from "@mantine/core";
import type { MediumPost } from "@/lib/medium";
import { PaginatedGrid } from "./PaginatedGrid";

type BlogPostsProps = {
  posts: MediumPost[];
};

export function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <PaginatedGrid
      items={posts}
      getKey={(post) => post.link}
      renderItem={(post) => (
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-surface group flex h-full flex-col rounded-2xl p-6 no-underline"
        >
          <Text size="sm" c="dimmed" fw={500}>
            {post.date}
          </Text>
          <h3 className="mt-3 mb-3 font-sans text-base font-semibold leading-snug tracking-normal text-[var(--fg)]">
            {post.title}
          </h3>
          {post.excerpt ? (
            <Text size="sm" lh={1.6} c="dimmed" style={{ flex: 1 }}>
              {post.excerpt}
            </Text>
          ) : null}
          {post.categories.length > 0 ? (
            <Text size="xs" c="dimmed" mt="sm">
              {post.categories.slice(0, 4).join(" · ")}
            </Text>
          ) : null}
        </a>
      )}
    />
  );
}
