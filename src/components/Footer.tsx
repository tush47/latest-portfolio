"use client";

import { Container, Group, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { site, socials } from "@/data/content";

const icons = {
  Email: IconMail,
  Phone: IconPhone,
  LinkedIn: IconBrandLinkedin,
  GitHub: IconBrandGithub,
  Medium: IconBrandMedium,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-[var(--border)] py-10">
      <Container size="lg">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Text className="brand-mark text-lg">{site.name}</Text>
            <Text size="sm" c="dimmed">
              © {year} {site.name}
            </Text>
          </div>

          <Group gap="md" wrap="wrap">
            {socials.map((item) => {
              const Icon = icons[item.label];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="nav-link inline-flex items-center gap-2"
                  aria-label={item.label}
                >
                  <Icon size={16} stroke={1.75} />
                  <span>{item.value}</span>
                </a>
              );
            })}
          </Group>
        </div>
      </Container>
    </footer>
  );
}
