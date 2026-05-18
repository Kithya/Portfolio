import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <section
      id="services"
      className="section-shell border-y border-slate-200/70 bg-white/45 dark:border-white/10 dark:bg-white/[0.02]"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.35 }}
          className="section-heading"
        >
          <p className="section-eyebrow">What I offer</p>
          <h2 className="section-title">Focused support for modern web projects.</h2>
          <p className="section-copy">
            Clean interfaces, practical frontend builds, and thoughtful UI
            planning for project work and junior development roles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {serviceData.map(({ icon, title, description }) => (
            <motion.article
              key={title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="surface-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-400/10">
                <Image src={icon} alt="" className="w-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950 dark:text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
