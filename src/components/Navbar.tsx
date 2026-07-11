"use client";

import { Burger, Container, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { navLinks, site } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const elevated = scroll.y > 12;

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
              {site.name.split(" ")[0]}
            </a>

            <Group gap="lg" visibleFrom="sm" wrap="nowrap">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
            </Group>

            <Group gap="sm" hiddenFrom="sm" wrap="nowrap">
              <ThemeToggle />
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
        title={<span className="brand-mark text-lg">{site.name.split(" ")[0]}</span>}
        styles={{
          content: { background: "var(--bg)" },
          header: { background: "var(--bg)" },
        }}
      >
        <Stack gap="md" mt="md">
          {navLinks.map((link) => (
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
