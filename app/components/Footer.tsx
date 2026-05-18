import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

type FooterProps = {
  isDarkMode: boolean;
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Kithya" },
  { label: "Facebook", href: "https://www.facebook.com/kithya.mrr/" },
  { label: "Telegram", href: "https://t.me/Kithyanara" },
  { label: "Email", href: "mailto:narakithya.work@gmail.com" },
];

const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer className="px-5 py-10 sm:px-6 lg:px-8">
      <div className="section-container">
        <div className="flex flex-col gap-8 border-b border-slate-200 pb-8 dark:border-white/10 md:flex-row md:items-center md:justify-between">
          <div>
            <Image
              src={isDarkMode ? assets.logo2_dark : assets.logo2}
              alt="Kithya logo"
              className="h-auto w-32"
            />
            <a
              href="mailto:narakithya.work@gmail.com"
              className="mt-4 flex w-max items-center gap-2 text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              <Image
                src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                alt=""
                className="w-5"
              />
              narakithya.work@gmail.com
            </a>
          </div>

          <ul className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600 dark:text-slate-300">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                  }
                  className="transition hover:text-slate-950 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nara Ratanakkithya. All rights reserved.</p>
          <p>Tel: +855 77961048</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
