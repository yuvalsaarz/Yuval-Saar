export type Project = {
  slug: string;
  title: string;
  year: number;
  course?: string;
  institution?: string;
  tags: string[];
  summary: string;
  description: string;
  cover: string;
  images?: string[];
  credits?: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "so-anyway",
    title: "SO.anyway",
    year: 2025,
    course: "AI2",
    institution: "Shenkar",
    tags: ["UX/UI", "Web App", "AI"],
    summary: "Browser-based mini app for deeper conversations.",
    description: `Experimental UX/UI concept using the v0.dev AI platform.

Context
This was a project exploring how small talk could become something more meaningful. I used v0.dev (an AI-based web builder) to experiment.

Before jumping into v0, I started with a quick Figma sketch to define the interaction flow and layout hierarchy.

Goal: Design a lightweight, mobile-friendly web app that helps people break the "weather-talk loop" and get to something real.

Next steps
— Expand question bank
— Add voice prompts for accessibility
— Enable shareable "conversation cards"`,
    cover: "/projects/so-anyway/cover.png",
    links: [{ label: "Live site", href: "https://so-anyway.vercel.app/" }],
  },
  {
    slug: "hands-n-faces",
    title: "Hands n' Faces",
    year: 2025,
    course: "Complicated Content",
    institution: "Shenkar",
    tags: ["Editorial", "Book Design"],
    summary: "An exploration of the space where reality and dreams blur and collide.",
    description: `In my project, I explore the contrast between internal experiences — memories, dreams, emotions — and the external world perceived as "objective reality." Inspired by the Felicia Library in Tel Aviv, where I encountered a blend of manual and technical work, I chose to focus on life's dualities. The book opens from both sides — Hebrew and English — meeting in the middle. The English side is more dreamlike: words turn into images, and footnotes become fragments of poems.`,
    cover: "/projects/hands-n-faces/cover.gif",
    images: ["/projects/hands-n-faces/01.png"],
    credits: ["Inspired by the Felicia Library, Tel Aviv"],
  },
  {
    slug: "digital-memory",
    title: "Digital Memory",
    year: 2025,
    course: "AI1",
    institution: "Shenkar",
    tags: ["AI", "Editorial", "Mixed Media"],
    summary:
      "A digital-emotional memory album exploring the tension between human and digital memory.",
    description: `A digital-emotional memory album exploring the tension between human memory and digital memory, combining AI-generated images, poems, and childhood drawings.

I wanted to explore the connection between digital memory — which can be completely erased — and human memory, which leaves traces, distortions, and emotional residues. My project is a digital-emotional memory album, combining AI-generated images made with MidJourney (based on my real childhood photos), short poems, and drawings.

It explores the contrast between human memory — imperfect and ever-shifting — and digital memory, which allows total deletion. I used MidJourney version 2, which produces raw, less polished visuals. I included childhood drawings — generated in my style, then redrawn by hand.`,
    cover: "/projects/digital-memory/cover.gif",
    images: [
      "/projects/digital-memory/01.png",
      "/projects/digital-memory/02.png",
      "/projects/digital-memory/03.png",
    ],
  },
  {
    slug: "soaps-instead",
    title: "Soaps.instead",
    year: 2024,
    course: "Packaging",
    institution: "Shenkar",
    tags: ["Packaging", "Branding"],
    summary: "A soap collection built around transformation and a generative visual system.",
    description: `This soap collection was designed around the idea that a shower is a transformative process — we enter as one version of ourselves and exit as another. That idea led me to the visual language of Israeli illustrator and designer Efi Rivkind, whose work used bold outlines, modular compositions, and saturated color in playful, unexpected ways.

I wanted my soaps to feel the same: connected, but constantly shifting in shape and color. They follow a generative logic — a visual system that allows variation, play, and surprise within a set of rules.

Soaps.instead plays with shifting expectations: fruits that could have become jam — lemon, fig, pear — instead become soaps. The name itself hints at that twist: "instead" suggests a quiet refusal, a small rerouting. A reminder that transformation can be simple, surprising, and sometimes just a choice away.`,
    cover: "/projects/soaps-instead/cover.gif",
    images: [
      "/projects/soaps-instead/05.png",
      "/projects/soaps-instead/01.gif",
      "/projects/soaps-instead/02.gif",
      "/projects/soaps-instead/03.gif",
      "/projects/soaps-instead/04.jpg",
    ],
    credits: ["Visual inspiration: Efi Rivkind"],
  },
  {
    slug: "pause-chocolate",
    title: "Pause Chocolate",
    year: 2024,
    course: "Packaging",
    institution: "Shenkar",
    tags: ["Packaging", "Branding"],
    summary: "The break your day's been waiting for. Chocolate made for working people.",
    description: `Inspired by the "podest" — a small landing between stairs.

This chocolate collection turns the idea of a pause into a physical, everyday moment. Like the architectural element, it's a short stop in the middle of something bigger.

Instead of just referencing architecture, I focused on what a pause feels like: visual breaks in the grid, transparent wrappers that let content peek through, minimal, quiet typography, a color palette with warmth and presence — rich browns, creamy neutrals, and saturated greens and pinks.

The colors are vibrant but not overwhelming — meant to feel alive, yet balanced. They reflect the sensory richness of chocolate and the idea of a pause that's both comforting and energizing.`,
    cover: "/projects/pause-chocolate/cover.jpg",
    images: [
      "/projects/pause-chocolate/01.png",
      "/projects/pause-chocolate/02.jpg",
      "/projects/pause-chocolate/03.jpg",
      "/projects/pause-chocolate/04.jpg",
      "/projects/pause-chocolate/05.jpg",
      "/projects/pause-chocolate/06.jpg",
      "/projects/pause-chocolate/07.jpg",
      "/projects/pause-chocolate/08.jpg",
    ],
  },
  {
    slug: "better-eater",
    title: "Better Eater",
    year: 2023,
    course: "Interactive 1",
    institution: "Shenkar",
    tags: ["UX/UI", "App Design"],
    summary:
      "Food habits change. Better Eater helps you change with them. A supportive app for building new eating habits.",
    description: `Overview
Better Eater is a supportive app for people adjusting to new ways of eating — whether it's due to a recent allergy diagnosis, a personal decision to eat healthier, or simply a life transition that calls for different food choices.

Instead of strict diet plans or rigid rules, the app offers warmth, clarity, and flexibility. Users get personalized meal suggestions, easy tutorials for cooking new ingredients, and gentle encouragement to help them build confidence in the kitchen. Better Eater isn't about perfection — it's about learning to eat in a way that fits who you are now.

The app offers
— Personalized weekly food plans
— Step-by-step tutorials for cooking new ingredients
— Educational videos and gentle encouragement
— A calming, non-judgmental user interface designed to reduce overwhelm
— A smart shopping list that updates automatically based on your weekly plan

Pain point
Changing the way we eat — whether by choice or necessity — can feel overwhelming. People often don't know where to start, what ingredients to buy, or how to prepare unfamiliar meals. Many apps offer rigid rules or generic solutions that don't adapt to users' emotional state or lifestyle. Users expressed a need for support that feels human, flexible, and encouraging — not judgmental or perfectionistic.`,
    cover: "/projects/better-eater/cover.png",
    images: [
      "/projects/better-eater/01.png",
      "/projects/better-eater/02.png",
      "/projects/better-eater/03.png",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
