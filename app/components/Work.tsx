import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
type NavbarProps = {
  isDarkMode: boolean;
};

const isValidLink = (value: string) =>
  !!value && value.trim() !== "" && value.trim().toLocaleLowerCase() !== "none";

const Work = ({ isDarkMode }: NavbarProps) => {
  const INITIAL_COUNT = 4;
  const [expended, setExpanded] = React.useState(false);

  const visibleProjects = expended
    ? workData
    : workData.slice(0, INITIAL_COUNT);

  const canToggle = workData.length > INITIAL_COUNT;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Latest Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-sm text-gray-500 dark:text-white/80"
      >
        Here are a few projects I’ve worked on. Hover a card to view the code or
        live demo.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="grid grid-template gap-6 my-10 dark:text-black"
      >
        {visibleProjects.map((project, index) => {
          const showGithub = isValidLink(project.github);
          const showLive = isValidLink(project.live);

          return (
            <motion.article
              key={project.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/20 bg-white/60 dark:bg-white/5"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-white/80">
                  {project.description}
                </p>

                {/* Tech stack */}
                {project.tech?.length ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={`${project.id}-${tech}`}
                        className="text-xs px-2.5 py-1 rounded-full border border-gray-300 text-gray-700 dark:text-white/80 dark:border-white/20"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {/* Hover overlay */}

              <div className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {showGithub && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:scale-[1.03] transition"
                  >
                    <span>Github</span>
                    <Image src={assets.send_icon} alt="" className="w-4" />
                  </a>
                )}

                {showLive && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white border border-white/40 hover:bg-white/20 hover:scale-[1.03] transition"
                  >
                    <span>Live</span>
                    <Image
                      src={
                        isDarkMode
                          ? assets.right_arrow_white
                          : assets.right_arrow_white
                      }
                      alt=""
                      className="w-4"
                    />
                  </a>
                )}

                {!showGithub && !showLive && (
                  <span className="pointer-events-auto text-white/90 tet-sm px-4 py-2 rounded-full border border-white/30">
                    Link Coming Soon
                  </span>
                )}
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {canToggle && (
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={() => setExpanded((p) => !p)}
            className="flex items-center w-max justify-center gap-2 text-gray-700 border-[0.5px] rounded-full py-3 px-10 hover:bg-gray-900 hover:text-white duration-400 dark:text-white dark:border-white dark:bg-white/70 dark:hover:text-white"
          >
            {expended ? "Show Less" : "Show More"}
            <Image
              src={
                isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold
              }
              alt=""
              className={`w-4 transition-transform duration-300 ${expended ? "rotate-90" : ""}`}
            />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Work;
