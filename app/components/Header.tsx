import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const focusItems = ["React", "Next.js", "Tailwind CSS", "SQL"];

const Header = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden px-5 pb-16 pt-32 sm:px-6 lg:px-8"
    >
      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl text-center lg:text-left"
        >
          <p className="section-eyebrow">Available for junior web roles</p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-950 sm:text-6xl lg:text-[4.5rem] dark:text-white">
            Frontend-focused developer building clean web experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            Hi, I&apos;m Nara Ratanakkithya. I build responsive React and
            Next.js projects, with a practical eye for UI polish, reusable
            components, and real-world product workflows.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <a href="#contact" className="primary-button w-full sm:w-auto">
              Contact me
              <Image
                src={assets.right_arrow_white}
                alt=""
                className="w-4 dark:invert"
              />
            </a>

            <a
              href="/Nara-Ratanakkithya-CV.pdf"
              download
              className="secondary-button w-full sm:w-auto"
            >
              Download resume
              <Image
                src={assets.download_icon}
                alt=""
                className="w-4 dark:invert"
              />
            </a>

            <a href="#projects" className="ghost-button w-full sm:w-auto">
              View projects
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {focusItems.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="surface-card overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-lg bg-slate-100 dark:bg-white/5">
              <Image
                src={assets.profile_round}
                alt="Nara Ratanakkithya"
                width={520}
                height={520}
                priority
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="mt-5 grid grid-cols-3 border-t border-slate-200 pt-4 text-center dark:border-white/10">
              <div className="border-r border-slate-200 px-2 dark:border-white/10">
                <p className="text-xl font-extrabold text-slate-950 dark:text-white">
                  5+
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Projects
                </p>
              </div>
              <div className="border-r border-slate-200 px-2 dark:border-white/10">
                <p className="text-xl font-extrabold text-slate-950 dark:text-white">
                  1+
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Years
                </p>
              </div>
              <div className="px-2">
                <p className="text-xl font-extrabold text-slate-950 dark:text-white">
                  Web
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Focus
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
