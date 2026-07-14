"use client";

import { Container, Text } from "@mantine/core";
import { projects, type Project } from "@/data/content";
import { PaginatedGrid } from "./PaginatedGrid";
import { SectionReveal } from "./SectionReveal";

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <h3 className="m-0 font-sans text-base font-semibold leading-snug tracking-normal text-[var(--fg)]">
        {project.title}
      </h3>
      <Text size="sm" lh={1.6} c="dimmed" mt="sm" style={{ flex: 1 }}>
        {project.description}
      </Text>
      {project.tags.length > 0 ? (
        <Text size="xs" c="dimmed" mt="sm">
          {project.tags.slice(0, 5).join(" · ")}
        </Text>
      ) : null}
    </>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="interactive-surface group flex h-full flex-col rounded-2xl p-6 no-underline"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="interactive-surface flex h-full flex-col rounded-2xl p-6 no-lift">
      {inner}
    </div>
  );
}

export function Projects() {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="section">
      <Container size="lg">
        <SectionReveal>
          <p className="section-label">Selected work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-lead">
            Things I&apos;ve built and shipped — products, tools, and experiments.
          </p>
        </SectionReveal>

        <PaginatedGrid
          items={projects}
          getKey={(project) => project.title}
          renderItem={(project) => <ProjectCard project={project} />}
        />
      </Container>
    </section>
  );
}
