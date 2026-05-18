"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const isValidLink = (value: string) =>
  Boolean(value && value.trim() !== "" && value.trim().toLowerCase() !== "none");

const Work = () => {
  const initialCount = 4;
  const [expanded, setExpanded] = React.useState(false);

  const visibleProjects = expanded ? workData : workData.slice(0, initialCount);
  const canToggle = workData.length > initialCount;

  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.35 }}
          className="section-heading"
        >
          <p className="section-eyebrow">Selected work</p>
          <h2 className="section-title">Projects that show how I build.</h2>
          <p className="section-copy">
            A mix of portfolio, SaaS-style, AI-assisted, and Laravel projects
            with source links and live demos where available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {visibleProjects.map((project) => {
            const showGithub = isValidLink(project.github);
            const showLive = isValidLink(project.live);

            return (
              <motion.article
                key={project.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="surface-card flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-white/5">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {project.tech?.length ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li key={`${project.id}-${tech}`} className="badge">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {showLive ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button"
                      >
                        Live demo
                        <Image
                          src={assets.right_arrow_white}
                          alt=""
                          className="w-4 dark:invert"
                        />
                      </a>
                    ) : null}

                    {showGithub ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                      >
                        GitHub
                        <Image
                          src={assets.send_icon}
                          alt=""
                          className="w-4 dark:invert"
                        />
                      </a>
                    ) : null}

                    {!showGithub && !showLive ? (
                      <span className="badge">Links coming soon</span>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {canToggle ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="secondary-button"
            >
              {expanded ? "Show less" : "Show more projects"}
              <Image
                src={assets.right_arrow_bold}
                alt=""
                className={`w-4 transition-transform duration-300 dark:invert ${
                  expanded ? "-rotate-90" : "rotate-90"
                }`}
              />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Work;
