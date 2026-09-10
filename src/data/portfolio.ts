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
    role: "Web and mobile interfaces",
    items: [
      { short: "N", name: "Next.js", description: "App Router, structured routes, metadata, and production-focused rendering." },
      { short: "R", name: "React", description: "Reusable components and interactions designed around real user behaviour." },
      { short: "RN", name: "React Native", description: "Cross-platform mobile experiences for connected customer and service-provider workflows." },
      { short: "TS", name: "TypeScript", description: "Reliable types that keep growing interfaces easier to understand and change." },
      { short: "JS", name: "JavaScript", description: "Product logic and interactive experiences across web applications and browser-based projects." },
      { short: "TW", name: "Tailwind CSS", description: "Responsive visual systems built quickly without losing consistency." },
      { short: "NW", name: "NativeWind", description: "Utility-first styling for consistent React Native interfaces." },
      { short: "UI", name: "Ant Design", description: "Structured interface components for data-heavy customer and administrative experiences." },
      { short: "ZS", name: "Zustand", description: "Focused client-side state management for interactive React products." },
      { short: "V", name: "Vite", description: "Fast frontend tooling for React applications and focused development workflows." },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    role: "Services and application logic",
    items: [
      { short: "N", name: "Node.js", description: "JavaScript services and server-side logic built on a familiar runtime." },
      { short: "EX", name: "Express", description: "RESTful service layers, middleware, authentication, and application workflows." },
      { short: "PY", name: "Python", description: "AI pipelines, data processing, evaluation logic, and backend development." },
      { short: "FA", name: "FastAPI", description: "Typed Python APIs for modular AI services and real-time streaming responses." },
      { short: "NET", name: "ASP.NET Core MVC", description: "Full-stack MVC applications with structured business logic, sessions, and role-aware administration." },
      { short: "C#", name: "C#", description: "Backend and domain logic for strongly typed .NET applications." },
      { short: "API", name: "REST APIs", description: "Clear endpoints that connect product interfaces to services and persistent data." },
      { short: "SSE", name: "Server-Sent Events", description: "Real-time streaming responses for conversational AI product experiences." },
    ],
  },
  {
    id: "data-ai",
    label: "Data & AI",
    role: "Data, retrieval, and intelligent systems",
    items: [
      { short: "MY", name: "MySQL", description: "Relational data modelling for booking, commerce, mobile, and administrative systems." },
      { short: "PG", name: "PostgreSQL", description: "Application data storage for modular AI-backed products." },
      { short: "EF", name: "Entity Framework Core", description: "Relational data access and persistence for ASP.NET Core applications." },
      { short: "SQL", name: "SQLModel", description: "Typed database models connecting FastAPI services with PostgreSQL." },
      { short: "PD", name: "Pydantic", description: "Validation and structured data contracts throughout Python API and AI pipelines." },
      { short: "LC", name: "LangChain", description: "Composable orchestration for retrieval, language models, and multi-step AI workflows." },
      { short: "RAG", name: "RAG", description: "Knowledge retrieval that grounds AI responses in relevant design information." },
      { short: "AI", name: "Agentic AI", description: "Multi-stage generation, rule checking, automatic repair, evaluation, and explanation." },
      { short: "CDB", name: "ChromaDB", description: "Vector storage and retrieval for contextual AI knowledge." },
      { short: "OR", name: "OpenRouter", description: "Model access for flexible language-model integration and experimentation." },
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    role: "Design, integration, and delivery",
    items: [
      { short: "G", name: "Git", description: "Focused commits and a history that makes collaboration easier." },
      { short: "GH", name: "GitHub", description: "A shared home for source code, reviews, issues, and delivery." },
      { short: "DK", name: "Docker Compose", description: "Repeatable local environments for databases and supporting services." },
      { short: "SW", name: "Swagger / OpenAPI", description: "API documentation that makes endpoints easier to inspect, test, and integrate." },
      { short: "EX", name: "Expo", description: "Development and delivery workflows for React Native applications." },
      { short: "OM", name: "Omise", description: "PromptPay payment flows and webhook-driven booking status updates." },
      { short: "F", name: "Figma", description: "Ideas explored visually before they become interface decisions." },
      { short: "VL", name: "Vercel", description: "Fast previews and a clean path from a branch to production." },
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
  {
    number: "05",
    slug: "full-return-ai-preneur",
    title: "Full Return",
    summary: "A cross-border logistics platform concept that connects empty return trips with available cargo to improve truck utilization and reduce lost revenue opportunities.",
    tags: ["Logistics", "Business Strategy", "Pitching"],
    status: "Top 10 Finalist",
    href: "/work/full-return-ai-preneur",
    accent: "#38bdf8",
    image: "/images/ai-preneur-full-return-pitch.jpg",
    imageAlt: "Presenting the Full Return logistics platform at the AI-Preneur Regional Hackathon",
    unoptimized: true,
    secondaryImage: "/images/ai-preneur-full-return-team.jpg",
    secondaryImageAlt: "Full Return team during the AI-Preneur Regional Hackathon final pitching round",
    secondaryImageLabel: "Final pitching team",
    secondaryImageOrientation: "landscape",
    context: "AI-Preneur Regional Hackathon · Mar 2026",
    association: "Advanced to the final pitching round",
    year: "Mar 2026",
    eyebrow: "Top 10 Finalist — AI-Preneur Regional Hackathon",
    issuer: "AI-Preneur",
    highlights: [
      { label: "Result", value: "Top 10 Finalist" },
      { label: "Concept", value: "No More Empty Trips" },
      { label: "Stage", value: "Final pitching round" },
    ],
    caseStudy: {
      challenge: "Trucks frequently complete a delivery and return without cargo, leaving valuable capacity unused and creating avoidable costs and lost revenue across cross-border transport routes.",
      solution: "Full Return connects planned return trips with available cargo so transport capacity can be reused instead of travelling empty, helping carriers improve utilization while making cross-border logistics more efficient.",
      features: ["Return-trip and cargo matching concept", "Cross-border logistics focus", "Truck-capacity utilization", "Business and impact-driven pitch"],
      process: [
        { step: "01", title: "Identify the empty-trip problem", description: "Study how trucks returning without cargo create unused capacity, additional cost, and missed revenue." },
        { step: "02", title: "Frame the opportunity", description: "Turn empty return routes into a logistics opportunity by connecting them with cargo that needs transportation." },
        { step: "03", title: "Shape Full Return", description: "Develop the platform concept, its value proposition, business direction, and potential impact around No More Empty Trips." },
        { step: "04", title: "Pitch the solution", description: "Present the problem, proposed solution, business concept, and impact during the final pitching round." },
      ],
      outcome: "Selected as one of the Top 10 teams in the AI-Preneur Regional Hackathon and advanced to the final pitching round with Full Return.",
    },
  },
  {
    number: "06",
    slug: "agentic-ai-3d-furniture-layout",
    title: "Agentic AI Furniture Layout",
    summary: "A research system for automated 3D furniture-layout generation that combines a Large Language Model, rule-based computation, Feng Shui evaluation, and automated layout repair.",
    tags: ["Agentic AI", "Qwen2.5-7B", "3D Generation"],
    status: "Research Presenter",
    href: "/work/agentic-ai-3d-furniture-layout",
    accent: "#a78bfa",
    image: "/images/eenet-2026-agentic-ai-presentation.jpg",
    imageAlt: "Research presenters at the 18th Electrical Engineering Network Conference 2026",
    unoptimized: true,
    context: "18th Electrical Engineering Network Conference · May 2026",
    association: "Associated with Sripatum University",
    year: "May 2026",
    eyebrow: "Research Paper — EENET 2026",
    issuer: "18th Conference of Electrical Engineering Network 2026",
    highlights: [
      { label: "JSON accuracy", value: "92.00%" },
      { label: "Feng Shui F1-score", value: "96.91%" },
      { label: "Precision", value: "100%" },
    ],
    caseStudy: {
      challenge: "Generate structurally valid 3D furniture layouts from high-level requirements while reliably detecting spatial-rule violations and avoiding false positives when a layout is already valid.",
      solution: "An Agentic AI workflow combines Qwen2.5-7B with deterministic rule-based computation, Feng Shui evaluation, and automated repair to generate, inspect, and improve furniture layouts.",
      features: ["LLM-driven structured layout generation", "Rule-based spatial computation", "Feng Shui violation detection", "Automated layout repair"],
      process: [
        { step: "01", title: "Generate a structured layout", description: "Use Qwen2.5-7B to translate layout requirements into structured JSON for a 3D furniture scene." },
        { step: "02", title: "Compute spatial rules", description: "Apply deterministic calculations to inspect furniture placement and relevant spatial relationships." },
        { step: "03", title: "Evaluate Feng Shui", description: "Detect rule violations while preserving valid non-violation cases without false-positive warnings." },
        { step: "04", title: "Repair and validate", description: "Automatically revise problematic layouts and evaluate the complete workflow with structural and detection metrics." },
      ],
      outcome: "Presented at EENET 2026 with 92.00% structural accuracy for JSON generation, a 96.91% F1-score for Feng Shui rule detection, and 100% precision with no false positives in non-violation cases.",
    },
  },
  {
    number: "07",
    slug: "buddy-builder-tech-idea-2026",
    title: "BUDDY BUILDER",
    summary: "A technology and innovation concept for creating a bedroom that reflects personal preferences while aligning the layout with Feng Shui principles.",
    tags: ["Technology Innovation", "Bedroom Planning", "Feng Shui"],
    status: "1st Place",
    href: "/work/buddy-builder-tech-idea-2026",
    accent: "#f472b6",
    image: "/images/tech-idea-2026-buddy-builder.jpg",
    imageAlt: "TECH IDEA 2026 winners and participants at Sripatum University",
    unoptimized: true,
    context: "TECH IDEA 2026 · Jul 2026",
    association: "Associated with Sripatum University",
    year: "Jul 2026",
    eyebrow: "1st Place — TECH IDEA 2026",
    issuer: "Sripatum University",
    highlights: [
      { label: "Result", value: "1st Place" },
      { label: "Competition", value: "University-level innovation" },
      { label: "Project", value: "BUDDY BUILDER" },
    ],
    caseStudy: {
      challenge: "Bring personal bedroom preferences and Feng Shui considerations together in one technology-driven room-planning concept.",
      solution: "BUDDY BUILDER presents the idea of helping people shape a bedroom they like while considering a layout that aligns with Feng Shui principles.",
      features: ["Preference-centred bedroom planning", "Feng Shui-informed layout concept", "Technology and innovation focus", "University competition presentation"],
      process: [
        { step: "01", title: "Define the room-planning problem", description: "Explore how personal taste and Feng Shui considerations can create competing requirements in bedroom planning." },
        { step: "02", title: "Frame the BUDDY BUILDER concept", description: "Shape a clear product idea around the promise: a bedroom you like, with the Feng Shui that feels right." },
        { step: "03", title: "Develop the innovation pitch", description: "Present the concept, intended value, and potential role of technology in the room-planning experience." },
        { step: "04", title: "Compete at TECH IDEA 2026", description: "Present BUDDY BUILDER at Sripatum University’s technology and innovation competition." },
      ],
      outcome: "Awarded 1st Place at TECH IDEA 2026, a university-level technology and innovation competition at Sripatum University.",
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
