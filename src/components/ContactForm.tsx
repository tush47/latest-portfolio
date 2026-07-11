"use client";

import {
  Button,
  Container,
  Group,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { FormEvent, useState } from "react";
import { site } from "@/data/content";
import { SectionReveal } from "./SectionReveal";

type Status = "idle" | "sending" | "success" | "error";

function buildMailto(fields: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const params = new URLSearchParams({
    subject: `[Portfolio] ${fields.subject}`,
    body: `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`,
  });
  return `mailto:${site.email}?${params.toString()}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();

    if (!accessKey) {
      window.location.href = buildMailto({ name, email, subject, message });
      setStatus("error");
      setError(
        "Missing Web3Forms key. Opening your email app instead. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local.",
      );
      return;
    }

    try {
      // Web3Forms free plan requires client-side submit (server IPs are blocked).
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: `[Portfolio] ${subject}`,
          message,
          from_name: name,
          replyto: email,
          botcheck: "",
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
        return;
      }

      window.location.href = buildMailto({ name, email, subject, message });
      setStatus("error");
      setError(
        result.message ||
          "Could not send via Web3Forms. Your email app should open with the message ready.",
      );
    } catch {
      window.location.href = buildMailto({ name, email, subject, message });
      setStatus("error");
      setError(
        "Network error. Your email app should open with the message ready.",
      );
    }
  }

  const fieldStyles = {
    input: {
      background: "var(--bg-elevated)",
      borderColor: "var(--border)",
      color: "var(--fg)",
    },
    label: {
      color: "var(--fg)",
      fontWeight: 500,
      marginBottom: 6,
    },
  };

  return (
    <section id="message" className="section">
      <Container size="lg">
        <SectionReveal>
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Contact me</h2>
          <p className="section-lead">
            Send a message to {site.email}.
          </p>
        </SectionReveal>

        <SectionReveal>
          <form
            onSubmit={handleSubmit}
            className="interactive-surface no-lift mt-10 max-w-2xl rounded-2xl p-6 md:p-8"
          >
            {/* Web3Forms honeypot — leave empty */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              style={{ display: "none" }}
              aria-hidden
            />
            <div className="space-y-4">
              <Group grow preventGrowOverflow={false} align="flex-start">
                <TextInput
                  name="name"
                  label="Name"
                  placeholder="Your name"
                  required
                  radius="md"
                  styles={fieldStyles}
                />
                <TextInput
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="you@example.com"
                  required
                  radius="md"
                  styles={fieldStyles}
                />
              </Group>
              <TextInput
                name="subject"
                label="Subject"
                placeholder="What is this about?"
                required
                radius="md"
                styles={fieldStyles}
              />
              <Textarea
                name="message"
                label="Message"
                placeholder="Write your message…"
                required
                minRows={5}
                radius="md"
                styles={fieldStyles}
              />
            </div>

            <Group mt="lg" gap="md" align="flex-start">
              <Button
                type="submit"
                loading={status === "sending"}
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
                Send message
              </Button>
              <div>
                {status === "success" && (
                  <Text size="sm" style={{ color: "var(--accent)" }}>
                    Message sent to {site.email}.
                  </Text>
                )}
                {status === "error" && (
                  <Text size="sm" c="red">
                    {error}
                  </Text>
                )}
              </div>
            </Group>
          </form>
        </SectionReveal>
      </Container>
    </section>
  );
}
