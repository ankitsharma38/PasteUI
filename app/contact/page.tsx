"use client";
import { useState } from "react";
import { Mail, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const body = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setState(r.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-accent-text focus:bg-card focus:outline-none transition-colors";

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        {/* Left Information */}
        <div className="lg:col-span-5">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Let’s talk.
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
            Have questions, prompt suggestions, or custom UI patterns you would like to see added to PasteUI? Reach out anytime.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="mailto:ankitsharma7805@gmail.com"
              className="group flex items-center gap-3.5 rounded-xl border border-line bg-card p-4 transition-colors hover:border-ink/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-text">
                <Mail size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted">Email direct</p>
                <p className="text-sm font-semibold text-ink group-hover:text-accent-text transition-colors">
                  ankitsharma7805@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/ankitsharma38"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5 rounded-xl border border-line bg-card p-4 transition-colors hover:border-ink/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-subtle text-ink">
                <Github size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted">Open Source GitHub</p>
                <p className="text-sm font-semibold text-ink group-hover:text-accent-text transition-colors">
                  github.com/ankitsharma38
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-line bg-card p-6 sm:p-8">
            {state === "done" ? (
              <div role="status" className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent-text mb-4">
                  <CheckCircle2 size={28} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-ink">Message sent successfully</h2>
                <p className="mt-2 text-xs sm:text-sm text-muted">
                  Thanks for reaching out. We will get back to you by email shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setState("idle")}
                  className="cursor-pointer mt-6 rounded-xl border border-line bg-card px-4 py-2 text-xs font-semibold text-ink hover:bg-subtle transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h2 className="text-lg font-bold text-ink">Send a message</h2>
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-muted">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    placeholder="e.g. Ankit Sharma"
                    minLength={2}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-muted">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-muted">
                    Message or component suggestion
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="Tell us what component or layout prompt you would like to see..."
                    className={inputClass}
                  />
                </div>

                {state === "error" && (
                  <div
                    role="alert"
                    className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-xs text-red-500 font-medium"
                  >
                    <AlertCircle size={16} aria-hidden="true" />
                    <span>Could not send message. Please verify your details or email directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="cursor-pointer inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
                >
                  <Send size={15} aria-hidden="true" />
                  <span>{state === "sending" ? "Sending..." : "Send message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
