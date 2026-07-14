"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

const skillPalettes = [
  { bg: "rgba(37, 99, 235, 0.18)", border: "rgba(37, 99, 235, 0.55)", color: "#1d4ed8", darkColor: "#93c5fd" },
  { bg: "rgba(14, 165, 233, 0.18)", border: "rgba(14, 165, 233, 0.55)", color: "#0284c7", darkColor: "#7dd3fc" },
  { bg: "rgba(99, 102, 241, 0.18)", border: "rgba(99, 102, 241, 0.55)", color: "#4f46e5", darkColor: "#a5b4fc" },
  { bg: "rgba(16, 185, 129, 0.18)", border: "rgba(16, 185, 129, 0.55)", color: "#059669", darkColor: "#6ee7b7" },
  { bg: "rgba(245, 158, 11, 0.18)", border: "rgba(245, 158, 11, 0.55)", color: "#d97706", darkColor: "#fcd34d" },
  { bg: "rgba(236, 72, 153, 0.16)", border: "rgba(236, 72, 153, 0.5)", color: "#db2777", darkColor: "#f9a8d4" },
  { bg: "rgba(8, 145, 178, 0.18)", border: "rgba(8, 145, 178, 0.55)", color: "#0e7490", darkColor: "#67e8f9" },
  { bg: "rgba(79, 70, 229, 0.18)", border: "rgba(79, 70, 229, 0.55)", color: "#4338ca", darkColor: "#c7d2fe" },
];

function skillStyle(index: number): CSSProperties {
  const palette = skillPalettes[index % skillPalettes.length];
  return {
    background: palette.bg,
    borderColor: palette.border,
    color: palette.color,
    ["--skill-color-dark" as string]: palette.darkColor,
  };
}

type SkillPillProps = {
  label: string;
  index: number;
};

function SkillPill({ label, index }: SkillPillProps) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="skill-pill-slot">
      <motion.span
        className="skill-pill skill-pill-colorful"
        style={skillStyle(index)}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.35,
          delay: Math.min(index, 12) * 0.03,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={reduceMotion ? undefined : { y: -2 }}
      >
        {label}
      </motion.span>
    </span>
  );
}

type SkillPillsProps = {
  items: readonly string[];
  groupIndex: number;
};

export function SkillPills({ items, groupIndex }: SkillPillsProps) {
  return (
    <div className="skill-pills-wrap">
      {items.map((skill, i) => (
        <SkillPill
          key={skill}
          label={skill}
          index={groupIndex * 11 + i}
        />
      ))}
    </div>
  );
}
