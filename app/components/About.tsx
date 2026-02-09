import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

type AboutProps = {
  isDarkMode: boolean;
};

const floatVariant = {
  animate: (i: number) => ({
    y: [0, -6, 0],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.12,
    },
  }),
};

const About = ({ isDarkMode }: AboutProps) => {
  return (
    <section id="about" className="w-full px-[12%] py-14 scroll-mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.35 }}
        className="text-center"
      >
        <h4 className="mb-2 text-lg font-ovo text-gray-700 dark:text-white/80">
          Introduction
        </h4>
        <h2 className="text-5xl font-ovo text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 max-w-2xl mx-auto font-ovo text-sm text-gray-500 dark:text-white/80">
          I’m a frontend-focused developer who enjoys building clean, modern
          interfaces and shipping real projects while learning best practices.
        </p>
      </motion.div>

      {/* Main */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.25 }}
        className="mt-14 flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-16"
      >
        {/* Left: Image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative w-full max-w-[380px]"
        >
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-b from-black/10 to-transparent blur-xl dark:from-white/10" />
          <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white/60 p-2 shadow-sm dark:border-white/15 dark:bg-white/5">
            <Image
              src={assets.profile}
              alt="Portrait"
              className="w-full rounded-3xl object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex-1 w-full">
          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            viewport={{ once: true, amount: 0.35 }}
            className="max-w-2xl font-ovo text-gray-700 dark:text-white/80"
          >
            Software Engineering graduate focused on frontend web development. I
            like building modern UI with React/Next.js and improving through
            real-world projects. I’m currently looking for junior/intern
            opportunities where I can contribute and grow fast.
          </motion.p>

          {/* Highlight chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            viewport={{ once: true, amount: 0.35 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {[
              "Frontend (React / Next.js)",
              "Tailwind UI",
              "API Integration",
              "Open to internship/junior",
            ].map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-full text-xs border border-gray-300 text-gray-700 bg-white/60
                dark:bg-white/5 dark:text-white/80 dark:border-white/20"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          {/* Info cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            viewport={{ once: true, amount: 0.25 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }) => (
              <motion.li
                key={title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-gray-200 bg-white/60 p-5 shadow-sm
                dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    width={28}
                    height={28}
                    className="shrink-0"
                  />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10"
          >
            <h4 className="text-gray-700 font-ovo dark:text-white/80">
              Tools I use
            </h4>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {toolsData.map((tool, i) => (
                <motion.div
                  key={i}
                  variants={floatVariant}
                  custom={i}
                  animate="animate"
                  whileHover={{ scale: 1.06 }}
                  className="rounded-xl border border-gray-300 bg-white/60 p-3 shadow-sm
                  dark:border-white/20 dark:bg-white/5"
                  aria-label="Tool"
                >
                  <Image src={tool} alt="tool" width={26} height={26} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
