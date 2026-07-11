"use client";

import { Button, Container, Text } from "@mantine/core";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="about" className="section pt-28 md:pt-36">
      <Container size="lg">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-14">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-xl order-2 text-center md:order-1 md:text-left"
          >
            <motion.p variants={item} className="section-label">
              {site.role} · {site.location}
            </motion.p>

            <motion.h1
              variants={item}
              className="m-0 font-sans text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-normal text-[var(--fg)]"
            >
              {site.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)] md:mx-0 md:text-xl mx-auto"
            >
              {site.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <Button
                  component="a"
                  href="#experience"
                  size="md"
                  radius="xl"
                  styles={{
                    root: {
                      background: "var(--accent)",
                      color: "var(--accent-contrast)",
                      fontWeight: 600,
                      border: "none",
                    },
                  }}
                >
                  View experience
                </Button>
                <Button
                  component="a"
                  href="#message"
                  size="md"
                  radius="xl"
                  variant="outline"
                  styles={{
                    root: {
                      borderColor: "var(--border)",
                      color: "var(--fg)",
                      background: "transparent",
                    },
                  }}
                >
                  Contact me
                </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 flex w-full justify-center md:order-2 md:w-auto"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative h-44 w-44 overflow-hidden rounded-full border-2 sm:h-52 sm:w-52 md:h-64 md:w-64"
              style={{
                borderColor: "color-mix(in srgb, var(--accent) 45%, var(--border))",
                boxShadow: "0 20px 50px color-mix(in srgb, var(--accent) 18%, transparent)",
              }}
            >
              <Image
                src="/profile.png"
                alt={`${site.name} — professional portrait`}
                fill
                priority
                sizes="(max-width: 768px) 208px, 256px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 max-w-3xl md:mt-20">
          <p className="section-label">Who I am</p>
          <h2 className="section-title">About</h2>
          <div className="space-y-4">
            {site.about.map((paragraph) => (
              <Text key={paragraph.slice(0, 24)} c="dimmed" size="md" lh={1.7}>
                {paragraph}
              </Text>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
