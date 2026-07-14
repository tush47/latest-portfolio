import { Container, Text } from "@mantine/core";
import { site } from "@/data/content";
import { getMediumPosts } from "@/lib/medium";
import { BlogPosts } from "./BlogPosts";
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
          <BlogPosts posts={posts} />
        )}
      </Container>
    </section>
  );
}
