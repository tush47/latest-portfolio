"use client";

import { Container, List, Text } from "@mantine/core";
import { education } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Education() {
  return (
    <section id="education" className="section">
      <Container size="lg">
        <SectionReveal>
          <p className="section-label">Academics</p>
          <h2 className="section-title">Education</h2>
          <p className="section-lead">
            Formal education and schooling background.
          </p>
        </SectionReveal>

        <div className="mt-10 space-y-6">
          {education.map((item, index) => (
            <SectionReveal key={`${item.degree}-${item.period}`} delay={0.05 * index}>
              <article className="interactive-surface rounded-2xl p-6 md:p-8">
                <Text fw={600} size="lg" style={{ color: "var(--fg)" }}>
                  {item.degree}
                </Text>
                <Text mt={4} fw={500} style={{ color: "var(--accent)" }}>
                  {item.school}
                </Text>
                <Text size="sm" c="dimmed" mt={6}>
                  {item.period}
                </Text>

                {item.details.length > 0 && (
                  <List
                    mt="md"
                    spacing="sm"
                    size="sm"
                    styles={{
                      item: { color: "var(--fg-muted)", lineHeight: 1.65 },
                      itemWrapper: { alignItems: "flex-start" },
                    }}
                  >
                    {item.details.map((detail) => (
                      <List.Item key={detail.slice(0, 40)}>{detail}</List.Item>
                    ))}
                  </List>
                )}
              </article>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
