export const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const stackGroups = [
  {
    id: "frontend",
    label: "Frontend",
    role: "Interface engineering",
    items: [
      { short: "N", name: "Next.js", description: "App Router, structured routes, metadata, and production-focused rendering." },
      { short: "TS", name: "TypeScript", description: "Reliable types that keep growing interfaces easier to understand and change." },
      { short: "R", name: "React", description: "Reusable components and interactions designed around real user behaviour." },
      { short: "TW", name: "Tailwind", description: "Responsive visual systems built quickly without losing consistency." },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    role: "Reliable foundations",
    items: [
      { short: "N", name: "Node.js", description: "JavaScript services and server-side logic built on a familiar runtime." },
      { short: "API", name: "REST APIs", description: "Clear endpoints that connect products to the data they need." },
      { short: "DB", name: "Databases", description: "Practical data structures designed around product requirements." },
      { short: "AU", name: "Auth", description: "Secure sign-in and access patterns with a straightforward user experience." },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    role: "From idea to launch",
    items: [
      { short: "G", name: "Git", description: "Focused commits and a history that makes collaboration easier." },
      { short: "GH", name: "GitHub", description: "A shared home for source code, reviews, issues, and delivery." },
      { short: "F", name: "Figma", description: "Ideas explored visually before they become interface decisions." },
      { short: "V", name: "Vercel", description: "Fast previews and a clean path from a branch to production." },
    ],
  },
] as const;

export type StackGroupId = (typeof stackGroups)[number]["id"];

export type Project = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  tags: readonly string[];
  status: string;
  href: string;
  accent: string;
  image: string;
  imageAlt: string;
  unoptimized: boolean;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  secondaryImageLabel?: string;
  secondaryImageOrientation?: "portrait" | "landscape";
  context: string;
  association: string;
  year: string;
  eyebrow: string;
  issuer: string;
  highlights: readonly { label: string; value: string }[];
  caseStudy: {
    challenge: string;
    solution: string;
    features: readonly string[];
    process: readonly { step: string; title: string; description: string }[];
    outcome: string;
  };
};

export const projects = [
  {
    number: "01",
    slug: "code-quest",
    title: "Code Quest",
    summary: "A Low-Code platform that brings programming challenges into interactive gameplay, helping players practise problem solving and computational thinking through hands-on learning.",
    tags: ["Phaser 3", "JavaScript", "HTML/CSS"],
    status: "Semifinalist",
    href: "/work/code-quest",
    accent: "#72f1b8",
    image: "/images/code-quest-presentation-2024.jpg",
    imageAlt: "Code Quest presentation at the National Software Contest 2024",
    unoptimized: true,
    secondaryImage: "/images/code-quest-poster.webp",
    secondaryImageAlt: "Code Quest project poster",
    secondaryImageLabel: "Project poster",
    secondaryImageOrientation: "portrait",
    context: "National Software Contest — NSC Thailand · Jun 2024",
    association: "Associated with Sripatum University",
    year: "Jun 2024",
    eyebrow: "Semifinalist — National Software Contest 2024",
    issuer: "National Software Contest — NSC Thailand",
    highlights: [
      { label: "Recognition", value: "Central Region Semifinalist" },
      { label: "Format", value: "Low-Code learning platform" },
      { label: "Stack", value: "Phaser 3 · JavaScript · HTML/CSS" },
    ],
    caseStudy: {
      challenge: "Make programming logic approachable for learners who benefit from practising concepts through direct interaction instead of passive instruction.",
      solution: "Code Quest turns logic-programming exercises into a game adventure where players solve challenges, progress through stages, and receive an engaging learning experience.",
      features: ["Programming challenges inside gameplay", "Start, character-select, and gameplay scenes", "Level-based progression and ranking", "Game physics and interactive UI"],
      process: [
        { step: "01", title: "Frame the learning goal", description: "Define logical programming as the core skill the experience should help players practise." },
        { step: "02", title: "Turn lessons into play", description: "Translate exercises into missions, stages, and feedback that fit a game loop." },
        { step: "03", title: "Build the experience", description: "Create the 2D game flow with Phaser 3, JavaScript, HTML, and CSS." },
        { step: "04", title: "Present and evaluate", description: "Demonstrate the project to judges at the 26th National Software Contest." },
      ],
      outcome: "Selected as a semifinalist in the Central Region of the 26th National Software Contest: NSC 2024.",
    },
  },
  {
    number: "02",
    slug: "towing-car-booking-system",
    title: "Towing Car Booking System",
    summary: "A central mobile platform connecting towing-service users and providers through location-aware booking, real-time tracking, notifications, and job management.",
    tags: ["React Native", "Node.js", "MySQL"],
    status: "Research Presenter",
    href: "/work/towing-car-booking-system",
    accent: "#63d8ff",
    image: "/images/eenet-2025-presentation.jpg",
    imageAlt: "Presenters and attendees at the 17th Electrical Engineering Network Conference 2025",
    unoptimized: true,
    secondaryImage: "/images/eenet-2025-certificate.jpg",
    secondaryImageAlt: "EENET 2025 research presentation certificate",
    secondaryImageLabel: "Presenter certificate",
    secondaryImageOrientation: "landscape",
    context: "17th Electrical Engineering Network Conference · May 2025",
    association: "Associated with Sripatum University",
    year: "May 2025",
    eyebrow: "Presenter — EENET 2025",
    issuer: "17th Conference of Electrical Engineering Network",
    highlights: [
      { label: "Role", value: "Research paper presenter" },
      { label: "Stack", value: "React Native · Node.js · MySQL" },
      { label: "Evaluation", value: "4.63 providers · 4.62 users" },
    ],
    caseStudy: {
      challenge: "Connect people who need towing assistance with service providers through one platform while supporting location, booking, communication, and job workflows.",
      solution: "A mobile towing-car booking system that uses GPS-based services and real-time status updates to coordinate users with providers from request through job completion.",
      features: ["GPS-based location and towing requests", "Real-time job and vehicle tracking", "Notifications for important status changes", "Job management for service providers"],
      process: [
        { step: "01", title: "Study both sides of the service", description: "Define the booking and job-management needs of towing users and service providers." },
        { step: "02", title: "Design the central workflow", description: "Connect location, requests, provider jobs, status updates, and notifications in one system." },
        { step: "03", title: "Build mobile and server layers", description: "Develop the mobile experience with React Native, the service layer with Node.js, and persistent data with MySQL." },
        { step: "04", title: "Evaluate and present", description: "Evaluate the system with providers and users, then present the research paper at EENET 2025." },
      ],
      outcome: "The evaluation achieved overall satisfaction scores of 4.63 out of 5 from service providers and 4.62 out of 5 from users, and the paper was presented at EENET 2025.",
    },
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const capabilities = [
  { number: "01", title: "Design with clarity", description: "Turn an idea into a focused interface with strong hierarchy, useful motion, and a distinct visual voice." },
  { number: "02", title: "Build for real use", description: "Create responsive, accessible experiences with maintainable components instead of one-off screens." },
  { number: "03", title: "Keep room to grow", description: "Shape content and routes so new projects, writing, and experiments can be added without rebuilding the site." },
] as const;
