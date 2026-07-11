"use client";

import { createTheme, MantineColorsTuple } from "@mantine/core";

const blue: MantineColorsTuple = [
  "#eff4ff",
  "#dbe6fe",
  "#bfdbfe",
  "#93c5fd",
  "#60a5fa",
  "#3b82f6",
  "#2563eb",
  "#1d4ed8",
  "#1e40af",
  "#1e3a8a",
];

const ink: MantineColorsTuple = [
  "#eef2f8",
  "#d9e2f0",
  "#b8c7de",
  "#8fa3c4",
  "#6b82a8",
  "#4a5d7a",
  "#3a4c66",
  "#2b3a52",
  "#1a2740",
  "#0b1224",
];

export const theme = createTheme({
  primaryColor: "blue",
  colors: {
    blue,
    ink,
  },
  fontFamily: "var(--font-sans), system-ui, sans-serif",
  headings: {
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    fontWeight: "600",
  },
  defaultRadius: "md",
  cursorType: "pointer",
});
