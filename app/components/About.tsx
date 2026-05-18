import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "C++", "JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Laravel"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Figma"],
  },
];

const stats = [
  { label: "Projects built", value: "5+" },
  { label: "Learning web dev", value: "1+ yr" },
  { label: "Current goal", value: "Junior role" },
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.35 }}
          className="section-heading"
        >
          <p className="section-eyebrow">About me</p>
          <h2 className="section-title">
            A practical developer with a UI-first eye.
          </h2>
          <p className="section-copy">
            I like turning ideas into responsive web interfaces that feel clear,
            useful, and easy to maintain.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            className="surface-card p-5 sm:p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row">
              <Image
                src={assets.profile_round}
                alt="Nara Ratanakkithya"
                width={96}
                height={96}
                className="h-24 w-24 rounded-lg object-cover"
              />

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">
                  Frontend-focused
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                  Nara Ratanakkithya
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  I build modern web projects with React, Next.js, and Tailwind
                  CSS, while continuing to grow full-stack skills through Node,
                  Express, and SQL-based project work.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t border-slate-200 pt-4 dark:border-white/10"
                >
                  <p className="text-xl font-extrabold text-slate-950 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className="surface-card p-5 sm:p-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700 dark:text-teal-300">
                  Education
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                  Bachelor of Software Engineering
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Limkokwing University of Creative Technology
                </p>
              </div>
              <span className="badge w-max">2022 - 2025</span>
            </div>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
              My studies and projects focus on software engineering
              fundamentals, responsive interfaces, databases, and product-style
              development workflows.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          viewport={{ once: true, amount: 0.2 }}
          className="surface-card mt-6 p-5 sm:p-6"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">Skill stack</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                Tools I use to build and ship projects.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              A focused stack for frontend work, with backend and database
              fundamentals for complete project builds.
            </p>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h4 className="font-bold text-slate-800 dark:text-slate-100">
                  {group.title}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
