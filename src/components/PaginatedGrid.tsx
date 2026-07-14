"use client";

import { Button, Group, SimpleGrid } from "@mantine/core";
import { useMemo, useState, type ReactNode } from "react";
import { SectionReveal } from "./SectionReveal";

export const PAGE_SIZE = 4;

type PaginatedGridProps<T> = {
  items: readonly T[];
  getKey: (item: T) => string;
  renderItem: (item: T, index: number) => ReactNode;
  pageSize?: number;
  cols?: { base?: number; sm?: number; md?: number; lg?: number };
  empty?: ReactNode;
};

export function PaginatedGrid<T>({
  items,
  getKey,
  renderItem,
  pageSize = PAGE_SIZE,
  cols = { base: 1, md: 2 },
  empty = null,
}: PaginatedGridProps<T>) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, pageSize, safePage]);

  if (items.length === 0) {
    return <>{empty}</>;
  }

  const showControls = items.length > pageSize;
  const hasNext = safePage < totalPages;

  return (
    <>
      <SimpleGrid cols={cols} spacing="md" mt="xl">
        {pageItems.map((item, index) => (
          <SectionReveal key={getKey(item)} delay={0.04 * index}>
            {renderItem(item, (safePage - 1) * pageSize + index)}
          </SectionReveal>
        ))}
      </SimpleGrid>

      {showControls ? (
        <Group justify="center" gap="sm" mt="xl" wrap="wrap">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              className={`page-number${n === safePage ? " is-active" : ""}`}
              onClick={() => setPage(n)}
              aria-label={`Go to page ${n}`}
              aria-current={n === safePage ? "page" : undefined}
            >
              {n}
            </button>
          ))}

          {hasNext ? (
            <Button
              variant="light"
              radius="xl"
              size="sm"
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              styles={{
                root: {
                  background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                  color: "var(--accent)",
                  border: "1px solid color-mix(in srgb, var(--accent) 35%, var(--border))",
                  fontWeight: 600,
                },
              }}
            >
              Show more
            </Button>
          ) : null}
        </Group>
      ) : null}
    </>
  );
}
