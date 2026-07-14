"use client";

import { ActionIcon, Burger, Button, Container, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { IconFileText } from "@tabler/icons-react";
import { navLinks, projects, site } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";

const resumeButtonStyles = {
  root: {
    background: "var(--accent)",
    color: "var(--accent-contrast)",
    fontWeight: 600,
    border: "none",
  },
} as const;

function ResumeButton() {
  return (
    <Button
      component="a"
      href={site.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      size="sm"
      radius="xl"
      styles={resumeButtonStyles}
    >
      Resume
    </Button>
  );
}

function ResumeIconButton() {
  return (
    <ActionIcon
      component="a"
      href={site.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant="subtle"
      size="lg"
      radius="xl"
      aria-label="Open resume"
      styles={{
        root: {
          color: "var(--fg)",
          border: "1px solid var(--border)",
          background: "var(--bg-elevated)",
        },
      }}
    >
      <IconFileText size={18} stroke={1.75} />
    </ActionIcon>
  );
}

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const elevated = scroll.y > 12;
  const links = navLinks.filter(
    (link) => link.href !== "#projects" || projects.length > 0,
  );

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-[background,border-color,box-shadow] duration-200"
        style={{
          background: elevated ? "var(--nav-bg)" : "transparent",
          borderBottom: elevated ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: elevated ? "blur(14px)" : "none",
        }}
      >
        <Container size="lg" py="md">
          <Group justify="space-between" wrap="nowrap">
            <a href="#about" className="brand-mark text-xl md:text-2xl">
              {site.name}
            </a>

            <Group gap="lg" visibleFrom="sm" wrap="nowrap">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
              <ResumeButton />
            </Group>

            <Group gap="sm" hiddenFrom="sm" wrap="nowrap">
              <ThemeToggle />
              <ResumeIconButton />
              <Burger
                opened={opened}
                onClick={toggle}
                aria-label="Toggle navigation"
                color="var(--fg)"
              />
            </Group>
          </Group>
        </Container>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        title={<span className="brand-mark text-lg">{site.name}</span>}
        styles={{
          content: { background: "var(--bg)" },
          header: { background: "var(--bg)" },
        }}
      >
        <Stack gap="md" mt="md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-lg"
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
