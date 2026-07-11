"use client";

import { Badge, Container, List, Text } from "@mantine/core";
import { experience } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

export function Experience() {
  return (
    <section id="experience" className="section">
      <Container size="lg">
        <SectionReveal>
          <p className="section-label">Work</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-lead">
            Roles and responsibilities from production systems to growth
            frontend.
          </p>
        </SectionReveal>

        <div className="mt-10 space-y-8">
          {experience.map((job, index) => (
            <SectionReveal key={`${job.company}-${job.period}`} delay={0.05 * index}>
              <article className="interactive-surface rounded-2xl p-6 md:p-8">
                <Text fw={600} size="lg" style={{ color: "var(--fg)" }}>
                  {job.title}
                </Text>
                <Text mt={4} fw={500} style={{ color: "var(--accent)" }}>
                  {job.company}
                </Text>
                <Text size="sm" c="dimmed" mt={6}>
                  {job.location} · {job.workMode} · {job.period}
                </Text>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      radius="sm"
                      styles={{
                        root: {
                          borderColor: "var(--border)",
                          color: "var(--fg-muted)",
                          textTransform: "none",
                          fontWeight: 500,
                        },
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <List
                  mt="md"
                  spacing="sm"
                  size="sm"
                  styles={{
                    item: { color: "var(--fg-muted)", lineHeight: 1.65 },
                    itemWrapper: { alignItems: "flex-start" },
                  }}
                >
                  {job.highlights.map((point) => (
                    <List.Item key={point.slice(0, 40)}>{point}</List.Item>
                  ))}
                </List>
              </article>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
