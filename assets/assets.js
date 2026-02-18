import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import logo2 from "./logo2.png";
import logo2_dark from "./logo2_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import profile from "./profile.jpg";
import profile_round from "./profile_round.jpg";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  logo2,
  logo2_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  profile,
  profile_round,
};

export const workData = [
  {
    id: "portfolio-v1",
    title: "Portfolio Website",
    description: "Personal portfolio with dark mode + animations",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/portfolio.png", // put in /public
    github: "https://github.com/Kithya/Portfolio", // change later
    live: "https://kithya-portfolio.vercel.app/", // change later
  },
  {
    id: "resume-builder",
    title: "Resume Builder",
    description: "Build and preview resumes with templates",
    tech: ["React", "Tailwind", "MongoDB", "Node.js"],
    image: "/resume_builder.png",
    github: "https://github.com/Kithya/AI-Resume",
    live: "https://ai-resume-wine-five.vercel.app/", // or "" to hide Live button
  },
  {
    id: "ai-email-saas",
    title: "AI Email SaaS",
    description: "AI Email SaaS for sending emails",
    tech: ["NextJs", "Tailwind", "PostgresQL"],
    image: "/dealflow.png",
    github: "https://github.com/Kithya/email-project",
    live: "none",
  },
  {
    id: "resume-analyzer",
    title: "Resume Analyzer",
    description: "Analyze resumes with AI and get feedback",
    tech: ["React", "Tailwind"],
    image: "/resume_analyzer.png",
    github: "https://github.com/Kithya/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-two-murex.vercel.app/",
  },
  {
    id: "chatgpt-clone",
    title: "ChatGPT Clone",
    description: "Weather app built with React + Tailwind",
    tech: ["React", "Tailwind"],
    image: "/work-4.png",
    github: "none",
    live: "none",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Frontend Development",
    description:
      "Building responsive web interfaces using React, HTML, CSS, and Tailwind CSS. Focused on clean UI, reusable components, and user-friendly design",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Web Application Development",
    description:
      "Developing simple web applications with frontend and basic backend integration using Node.js and Express",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "Creating wireframes and interactive prototypes in Figma to plan user flows and improve usability before development.",
    link: "",
  },
] ;

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Limkokwing University of Creative Technology (2021 - 2025)",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const highlights = [
  { label: "Frontend-focused", value: "React + Next.js" },
  { label: "Seeking", value: "Intern / Junior" },
  { label: "Strengths", value: "UI, Components" },
  { label: "Mindset", value: "Build & Learn" },
];
