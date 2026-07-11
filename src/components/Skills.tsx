"use client";

import { Container, Text } from "@mantine/core";
import { skillGroups } from "@/data/content";
import { SectionReveal } from "./SectionReveal";
import { SkillPills } from "./SkillPills";

export function Skills() {
  return (
    <section id="skills" className="section">
      <Container size="lg">
        <SectionReveal>
          <p className="section-label">Toolkit</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-lead">
            Languages, frameworks, and experimentation tools I use to ship and
            measure production software.
          </p>
        </SectionReveal>

        <div className="mt-12 space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <SectionReveal key={group.title} delay={0.04 * groupIndex}>
              <Text fw={600} mb="md" style={{ color: "var(--fg)" }}>
                {group.title}
              </Text>
              <SkillPills items={group.items} groupIndex={groupIndex} />
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
