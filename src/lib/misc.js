import {
  LucideHome,
  UserIcon,
  StarsIcon,
  LayoutList,
  LucideContact,
} from "lucide-react";


import css from "@/assets/tech/css.webp";
import express from "@/assets/tech/express.webp";
import html from "@/assets/tech/html.webp";
import javascript from "@/assets/tech/javascript.webp";

import mongodb from "@/assets/tech/mongodb.webp";
import node from "@/assets/tech/node.webp";
import react from "@/assets/tech/react.webp";

import tailwind from "@/assets/tech/tailwind.webp";


import redux from "@/assets/tech/redux.webp";
import mui from "@/assets/tech/MUI.webp";
import jwt from "@/assets/tech/jwt.webp";
import zustand from "@/assets/tech/zustand.webp";
import socketio from "@/assets/tech/Socket.io.webp";
import cloudinary from "@/assets/tech/Cloudflare.webp";

import project1 from "@/assets/thumbnails/phoneguru.webp";
import project2 from "@/assets/thumbnails/beatchat.webp";
import project3 from "@/assets/thumbnails/bidflare.webp";
import project4 from "@/assets/thumbnails/amrutam.webp";
import project5 from "@/assets/thumbnails/movie.webp";

import github from "@/assets/socials/github.webp";
import linkedin from "@/assets/socials/linkedin.webp";
import whatsapp from "@/assets/socials/whatsapp.webp";

export const links = [
  {
    href: "#",
    Icon: LucideHome,
    title: "Home",
  },
  {
    href: "#about",
    Icon: UserIcon,
    title: "About",
  },
  {
    href: "#stack",
    Icon: StarsIcon,
    title: "Certification",
  },
  {
    href: "#projects",
    Icon: LayoutList,
    title: "Projects",
  },
  {
    href: "#contact",
    Icon: LucideContact,
    title: "Get in touch",
  },
];

export const stack = [
  { title: "HTML", logo: html },
  { title: "CSS", logo: css },
  { title: "JavaScript", logo: javascript },

  { title: "React", logo: react },
  { title: "Tailwind", logo: tailwind },

  { title: "Node.js", logo: node },
  { title: "Express", logo: express },
  { title: "MongoDB", logo: mongodb },

  { title: "Git", logo: github },
];

export const certifications = [
  {
    group: "Development & Technologies",
    items: [
      "React.js & Component-Based Architecture",
      "Tailwind CSS & Responsive UI Design",
      "JavaScript (ES6+) & DOM Manipulation",
      "REST APIs & Frontend Integration",
      "Node.js, Express & MongoDB Basics",
      "Authentication (JWT, OTP, Role-Based Flows)",
      "Git, GitHub & Version Control",
    ],
    speed: 0.5,
    direction: "forward",
  },

  {
    group: "Certifications & Learning",
    items: [
      "The  Web Development Bootcamp — Angela Yu",
      "Exprience Web Development Learning",
      "Introduction to C++ — Coding Ninjas",
      "DSA & Problem Solving Fundamentals",
      "Learning by Building Real Projects",
      "Frontend Performance & UI Thinking",
    ],
    speed: 0.8,
    direction: "backward",
  },

  {
    group: "Experience & Real Work",
    items: [
      "Software Developer Intern — Chainfly Tech Solutions",
      "Worked on Production-Level Features",
      "Built Reusable Components & UI Sections",
      "Responsive Design & Clean User Flow",
      "Debugging, API Handling & Frontend Fixes",
      "Hands-On Full Project Development",
    ],
    speed: 1,
    direction: "forward",
  },
];

export const projects = [
  {
    title: "Phone Guru",
    description:
      "A full-stack digital learning platform designed to reduce digital illiteracy among seniors and non-tech users by connecting them with tutors for guided help in mobile apps, digital payments, and essential online services. Features OTP-based authentication, role-based dashboards, session tracking, and responsive accessibility-focused UI.",
    img: project1,
    stack: [
      { title: "React", img: react },
      { title: "Redux Toolkit", img: redux },
      { title: "Tailwind", img: tailwind },
      { title: "Material UI", img: mui },
      { title: "Node.js", img: node },
      { title: "Express", img: express },
      { title: "MongoDB", img: mongodb },
      { title: "JWT", img: jwt },
    ],
    url: "https://phoneguru.vercel.app",
  },

  {
    title: "BeatChat",
    description:
      "A real-time chat platform built to make conversations more engaging through instant messaging, music integration, and AI-powered assistance. Includes live messaging with Socket.IO, typing indicators, online presence, image sharing, AI chatbot support, and personalized themes.",
    img: project2,
    stack: [
      { title: "React", img: react },
      { title: "Zustand", img: zustand },
      { title: "Tailwind", img: tailwind },
      { title: "Node.js", img: node },
      { title: "Express", img: express },
      { title: "MongoDB", img: mongodb },
      { title: "Socket.IO", img: socketio },
      { title: "Cloudinary", img: cloudinary },
    ],
    url: "https://beatchat-yh6i.onrender.com/login",
  },
  {
    title: "BidFlare",
    description:
      "A bidding-based web platform where users can explore listings, view details, and interact with a clean, responsive UI. Focused heavily on frontend structure, reusable components, and smooth user flow.",
    img: project3,
    stack: [
      { title: "React", img: react },
      { title: "Tailwind", img: tailwind },
      { title: "JavaScript", img: javascript },
    ],
    url: "https://final-year-project-rose-psi.vercel.app/",
  },

  {
    title: "Amrutam",
    description:
      "A modern healthcare-focused website redesign with emphasis on layout, spacing, and visual hierarchy. Built to improve readability, responsiveness, and overall user experience.",
    img: project4,
    stack: [
      { title: "React", img: react },
      { title: "Tailwind", img: tailwind },
      { title: "JavaScript", img: javascript },
    ],
    url: "https://amrutam-liard.vercel.app/",
  },

  {
    title: "Movie Explorer",
    description:
      "A movie discovery app that fetches and displays movie data dynamically. Includes reusable cards, API integration, and state-based rendering for a smooth browsing experience.",
    img: project5,
    stack: [
      { title: "html", img: html },
      { title: "css", img: css },
      { title: "JavaScript", img: javascript },
    ],
    url: "https://moviereviewshobh.netlify.app/",
  },
];

export const socials = [
  {
    title: "GitHub",
    icon: github,
    url: "https://github.com/Shobhit108",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/shobhittiwari108",
  },
  {
    title: "WhatsApp",
    icon: whatsapp,
    url: "https://wa.me/918081125652",
  },
];
