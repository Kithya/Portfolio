"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "f1fea556-0a0a-4b65-a49e-1118a2fe9198");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as Web3FormsResponse;

      if (data.success) {
        setResult("Message sent. Thank you!");
        form.reset();
        return;
      }

      setResult(data.message || "Something went wrong. Please try again.");
    } catch {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="section-shell border-y border-slate-200/70 bg-slate-950 text-white dark:border-white/10"
    >
      <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-300">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Let&apos;s talk about your next role or project.
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-slate-300">
            I&apos;m open to junior and internship opportunities, especially
            frontend roles where I can build polished interfaces and keep
            learning with a team.
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <a
              href="mailto:narakithya.work@gmail.com"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Image src={assets.mail_icon_dark} alt="" className="w-5" />
              narakithya.work@gmail.com
            </a>
            <p>Tel: +855 77961048</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={onSubmit}
          className="surface-card p-5 text-slate-950 sm:p-6 dark:text-white"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="field-input mt-2"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="field-input mt-2"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Message
            </span>
            <textarea
              name="message"
              placeholder="Tell me what you are looking for..."
              required
              rows={6}
              className="field-input mt-2 resize-none"
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button type="submit" className="primary-button">
              Send message
              <Image
                src={assets.right_arrow_white}
                alt=""
                className="w-4 dark:invert"
              />
            </button>

            <p
              className="min-h-6 text-sm font-semibold text-slate-600 dark:text-slate-300"
              aria-live="polite"
            >
              {result}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
