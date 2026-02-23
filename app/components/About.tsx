import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

type AboutProps = {
  isDarkMode: boolean;
};

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "C++", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Design",
    items: ["Figma"],
  },
];

const stats = [
  { label: "Projects", value: "5+" },
  { label: "Years Learning", value: "1+" },
  { label: "Focus", value: "Web Dev" },
];

const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Limkokwing University of Creative Technology",
    period: "2022 - 2025",
    detail:
      "Focused on software engineering fundamentals, web development, databases, and project-based learning.",
  },
];

const About = ({ isDarkMode: _isDarkMode }: AboutProps) => {
  return (
    <section
      id="about"
      className="w-full px-[8%] lg:px-[10%] py-14 scroll-mt-20"
    >
      {/* Header (same style as your previous design) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.35 }}
        className="text-center"
      >
        <h4 className="mb-2 text-lg font-ovo text-gray-700 dark:text-white/80">
          Introduction
        </h4>
        <h2 className="text-5xl font-ovo text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-white/70 leading-7">
          Frontend-focused developer who enjoys building clean, responsive web
          interfaces and learning through real projects. Currently looking for
          junior / internship opportunities.
        </p>
      </motion.div>

      {/* Main layout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6"
      >
        {/* Left column */}
        <div className="space-y-6">
          {/* Profile + intro card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="shrink-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={assets.profile_round}
                  alt="Profile"
                  width={84}
                  height={84}
                  className="rounded-full object-cover border border-gray-200 dark:border-white/10"
                />
              </motion.div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Nara Kithya
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-white/70">
                  Junior Web Developer (Frontend-focused)
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-white/70">
                  I build modern web interfaces with React and Tailwind CSS, and
                  I also work with backend tools like Node.js, Express, and SQL
                  databases for full-stack learning/projects.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-gray-200 bg-white p-4 text-center dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -2 }}
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Education
            </h3>

            <div className="mt-4 space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={`${item.degree}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`${
                    index !== education.length - 1
                      ? "pb-4 border-b border-gray-100 dark:border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {item.degree}
                    </p>
                    <span className="text-sm text-gray-500 dark:text-white/60">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-white/70">
                    {item.school}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/65">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column - skills/stack */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-white/10 dark:bg-white/5"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Technical Skills & Stack
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-white/65">
            Core technologies I use for web development projects.
          </p>

          <div className="mt-6 space-y-5">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: groupIndex * 0.05 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-medium text-gray-800 dark:text-white/85">
                  {group.title}
                </h4>

                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.25,
                        delay: groupIndex * 0.04 + itemIndex * 0.02,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700
                      dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
