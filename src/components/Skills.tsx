"use client";

import { Container, Text } from "@mantine/core";
import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

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

function skillStyle(index: number) {
  const palette = skillPalettes[index % skillPalettes.length];
  return {
    background: palette.bg,
    borderColor: palette.border,
    color: palette.color,
    ["--skill-color-dark" as string]: palette.darkColor,
  };
}

export function Skills() {
  const reduceMotion = useReducedMotion();

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
              <div className="flex flex-wrap items-center gap-3">
                {group.items.map((skill, i) => {
                  const globalIndex = groupIndex * 11 + i;
                  return (
                    <motion.span
                      key={skill}
                      className="skill-pill skill-pill-colorful"
                      style={skillStyle(globalIndex)}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              scale: [1, 1.08, 1],
                              fontSize: ["0.9rem", "1.05rem", "0.9rem"],
                            }
                      }
                      transition={{
                        opacity: { duration: 0.35, delay: 0.03 * i },
                        y: { duration: 0.35, delay: 0.03 * i },
                        scale: {
                          duration: 2.4 + (i % 5) * 0.35,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: (i % 7) * 0.2,
                        },
                        fontSize: {
                          duration: 2.4 + (i % 5) * 0.35,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: (i % 7) * 0.2,
                        },
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { scale: 1.14, fontSize: "1.12rem" }
                      }
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
