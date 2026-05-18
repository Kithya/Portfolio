"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#070b13]/85"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="flex items-center"
            aria-label="Nara Ratanakkithya portfolio home"
          >
            <Image
              src={isDarkMode ? assets.logo2_dark : assets.logo2}
              alt="Kithya logo"
              className="h-auto w-28"
              priority
            />
          </a>

          <ul className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 p-1 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-4 py-2 transition hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="icon-button"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt=""
                className="w-5"
              />
            </button>

            <a href="#contact" className="secondary-button hidden lg:inline-flex">
              Contact
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt=""
                className="w-3"
              />
            </a>

            <button
              type="button"
              className="icon-button md:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt=""
                className="w-5"
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm transition-opacity md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-72 flex-col border-l border-slate-200 bg-white px-6 py-6 shadow-2xl transition-transform duration-300 dark:border-white/10 dark:bg-[#0b1220] md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image
            src={isDarkMode ? assets.logo2_dark : assets.logo2}
            alt="Kithya logo"
            className="h-auto w-24"
          />
          <button
            type="button"
            className="icon-button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-4"
            />
          </button>
        </div>

        <ul className="mt-10 flex flex-col gap-2 text-base font-semibold text-slate-700 dark:text-slate-100">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                onClick={closeMenu}
                href={item.href}
                className="block rounded-lg px-3 py-3 transition hover:bg-slate-100 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" onClick={closeMenu} className="primary-button mt-auto">
          Let&apos;s talk
        </a>
      </aside>
    </>
  );
};

export default Navbar;
