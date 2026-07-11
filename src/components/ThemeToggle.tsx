"use client";

import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useMounted } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ThemeToggle() {
  const mounted = useMounted();
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  // Keep SSR + first client render identical. ColorSchemeScript may already
  // set dark mode on <html> before React hydrates, which would mismatch.
  const isDark = mounted && computed === "dark";

  return (
    <ActionIcon
      variant="subtle"
      size="lg"
      radius="xl"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setColorScheme(isDark ? "light" : "dark")}
      styles={{
        root: {
          color: "var(--fg)",
          border: "1px solid var(--border)",
          background: "var(--bg-elevated)",
        },
      }}
    >
      {isDark ? <IconSun size={18} stroke={1.75} /> : <IconMoon size={18} stroke={1.75} />}
    </ActionIcon>
  );
}
