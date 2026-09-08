export const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
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

export type WorkItem = {
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

export const workItems = [
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
  {
    number: "03",
    slug: "brics-ecommerce-data-analysis",
    title: "E-commerce Operations Data Analysis",
    summary: "An international competition achievement demonstrating data analysis, e-commerce operations, and technology-innovation skills while representing Sripatum University.",
    tags: ["Data Analysis", "E-commerce", "Technology Innovation"],
    status: "2nd Place",
    href: "/work/brics-ecommerce-data-analysis",
    accent: "#ffc857",
    image: "/images/brics-2025-award-ceremony.jpg",
    imageAlt: "Sripatum University representatives at the Belt and Road and BRICS 2025 award ceremony",
    unoptimized: true,
    secondaryImage: "/images/brics-2025-certificate.jpg",
    secondaryImageAlt: "Certificate of Honour for Second Prize at the 2025 Belt and Road and BRICS competition",
    secondaryImageLabel: "Certificate of Honour",
    secondaryImageOrientation: "landscape",
    context: "Belt & Road and BRICS Competition · Oct 2025",
    association: "Represented Sripatum University",
    year: "Oct 2025",
    eyebrow: "2nd Place — Belt & Road & BRICS 2025",
    issuer: "BRICS Business Council",
    highlights: [
      { label: "Result", value: "Second Prize" },
      { label: "Track", value: "E-commerce Operations Data Analysis" },
      { label: "Level", value: "Finals · International Group" },
    ],
    caseStudy: {
      challenge: "Work with e-commerce operations data in an international competition setting and turn the available information into clear, useful operational conclusions.",
      solution: "Apply a structured analysis process to interpret e-commerce performance, identify meaningful patterns, and communicate insights that support operational decision-making.",
      features: ["E-commerce performance analysis", "Operational data interpretation", "Insight-driven decision support", "International competition collaboration"],
      process: [
        { step: "01", title: "Understand the operation", description: "Frame the e-commerce context, objectives, and data points that matter to the competition task." },
        { step: "02", title: "Analyse the data", description: "Examine operational information to identify patterns, performance signals, and areas of interest." },
        { step: "03", title: "Translate findings", description: "Turn the analysis into concise insights connected to e-commerce operations and technology innovation." },
        { step: "04", title: "Compete internationally", description: "Represent Sripatum University in the International Group finals and present the completed analysis." },
      ],
      outcome: "Awarded Second Prize in the finals of the Third E-commerce Operations Data Analysis Competition (International Group) at the 2025 Belt & Road and BRICS Competition.",
    },
  },
  {
    number: "04",
    slug: "digital-fraud-cybersecurity-hackathon",
    title: "Digital Fraud Cybersecurity Hackathon",
    summary: "A Top 20 team achievement in the Samsung × KBTG hackathon, demonstrating cybersecurity, structured problem-solving, and technology-innovation skills.",
    tags: ["Cybersecurity", "Fraud Prevention", "Innovation"],
    status: "Top 20",
    href: "/work/digital-fraud-cybersecurity-hackathon",
    accent: "#7aa2ff",
    image: "/images/kbtg-cybersecurity-team.jpg",
    imageAlt: "Team AI Spark at the Samsung and KBTG Digital Fraud Cybersecurity Hackathon",
    unoptimized: true,
    secondaryImage: "/images/kbtg-cybersecurity-certificate.jpg",
    secondaryImageAlt: "Certificate of Participation for the Digital Fraud Cybersecurity Hackathon",
    secondaryImageLabel: "Top 20 certificate",
    secondaryImageOrientation: "landscape",
    context: "Samsung × KBTG Cybersecurity Hackathon · Jan 2026",
    association: "Team AI Spark · Associated with Sripatum University",
    year: "Jan 2026",
    eyebrow: "Top 20 — Samsung × KBTG",
    issuer: "KASIKORN Business-Technology Group [KBTG]",
    highlights: [
      { label: "Result", value: "Top 20 teams" },
      { label: "Team", value: "AI Spark" },
      { label: "Focus", value: "Digital fraud · Cybersecurity" },
    ],
    caseStudy: {
      challenge: "Explore the growing problem of digital fraud and develop cybersecurity thinking within a competitive, team-based hackathon environment.",
      solution: "Use structured problem-solving and technology-innovation methods to investigate fraud-prevention challenges and develop a considered cybersecurity approach as Team AI Spark.",
      features: ["Digital fraud prevention focus", "Cybersecurity problem-solving", "Team-based innovation", "Practical workshop participation"],
      process: [
        { step: "01", title: "Advance to the Top 20", description: "Qualify as Team AI Spark for the next stage of the Samsung × KBTG hackathon." },
        { step: "02", title: "Build practical knowledge", description: "Participate in the workshop session focused on digital fraud prevention and cybersecurity innovation." },
        { step: "03", title: "Explore the threat context", description: "Apply structured thinking to understand fraud risks, affected users, and potential intervention points." },
        { step: "04", title: "Collaborate as a team", description: "Combine cybersecurity, problem-solving, and innovation skills within the hackathon setting." },
      ],
      outcome: "Advanced to the Top 20 teams in the Samsung × KBTG Digital Fraud Cybersecurity Hackathon and completed the workshop session held on 29 January 2026.",
    },
  },
] as const satisfies readonly WorkItem[];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return workItems.find((item) => item.slug === slug);
}

export const capabilities = [
  { number: "01", title: "Design with clarity", description: "Turn an idea into a focused interface with strong hierarchy, useful motion, and a distinct visual voice." },
  { number: "02", title: "Build for real use", description: "Create responsive, accessible experiences with maintainable components instead of one-off screens." },
  { number: "03", title: "Keep room to grow", description: "Shape content and routes so new projects, writing, and experiments can be added without rebuilding the site." },
] as const;
