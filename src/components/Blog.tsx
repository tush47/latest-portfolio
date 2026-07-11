import { Container, SimpleGrid, Text } from "@mantine/core";
import { site } from "@/data/content";
import { getMediumPosts } from "@/lib/medium";
import { SectionReveal } from "./SectionReveal";

export async function Blog() {
  const posts = await getMediumPosts();

  return (
    <section id="blog" className="section">
      <Container size="lg">
        <SectionReveal>
          <p className="section-label">Writing</p>
          <h2 className="section-title">Medium blogs</h2>
        </SectionReveal>

        {posts.length === 0 ? (
          <SectionReveal>
            <div className="interactive-surface mt-10 rounded-2xl p-6">
              <Text c="dimmed">
                Could not load posts right now. Visit{" "}
                <a
                  href={site.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)" }}
                >
                  my Medium profile
                </a>{" "}
                directly.
              </Text>
            </div>
          </SectionReveal>
        ) : (
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md" mt="xl">
            {posts.map((post, index) => (
              <SectionReveal key={post.link} delay={0.04 * index}>
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
              </SectionReveal>
            ))}
          </SimpleGrid>
        )}
      </Container>
    </section>
  );
}
