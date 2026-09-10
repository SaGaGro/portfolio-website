export type ProjectGalleryItem = {
  src: string;
  alt: string;
  label: string;
  description: string;
  orientation: "portrait" | "landscape";
};

export type ProjectGalleryGroup = {
  id: string;
  label: string;
  description: string;
  items: readonly ProjectGalleryItem[];
};

export type SoftwareProject = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  status: string;
  summary: string;
  brief: string;
  role: string;
  tags: readonly string[];
  highlights: readonly { label: string; value: string }[];
  keyActivities: readonly string[];
  features: readonly { title: string; description: string }[];
  galleryGroups: readonly ProjectGalleryGroup[];
  relatedWorkHref?: string;
};

export const projectItems = [
  {
    number: "01",
    slug: "slideme-towing-car-booking",
    title: "SlideMe — Towing Car Booking System",
    shortTitle: "SlideMe",
    category: "Mobile service platform",
    status: "Product case study",
    summary: "A centralized towing-service application that connects customers with service providers through booking, location sharing, status tracking, and coordinated service workflows.",
    brief: "SlideMe began with a real-world project brief provided by an external senior. The team clarified the initial requirements, analyzed user needs and potential problems, and translated them into functional requirements and a practical mobile product.",
    role: "Requirements · UX/UI · Mobile development",
    tags: ["React Native", "Expo", "NativeWind", "Node.js", "MySQL"],
    highlights: [
      { label: "Platform", value: "Mobile application" },
      { label: "Starting point", value: "Real-world project brief" },
      { label: "Interface coverage", value: "Customer & driver apps" },
    ],
    keyActivities: [
      "Gathered and clarified requirements from the project brief",
      "Analyzed requirements and translated them into system functionality",
      "Identified user needs and defined an appropriate product solution",
      "Designed user flows and UX/UI around the service journey",
      "Developed the mobile application and implemented core functionality",
    ],
    features: [
      { title: "Service booking", description: "Customers can begin a towing request through a focused mobile flow." },
      { title: "GPS location sharing", description: "Location information supports pickup coordination between the customer and provider." },
      { title: "Status tracking", description: "The service journey remains visible from acceptance through completion." },
      { title: "Customer–provider coordination", description: "Calling, messaging, and service information stay connected to the active job." },
    ],
    galleryGroups: [
      {
        id: "customer-app",
        label: "Customer App",
        description: "The first three screens follow the customer journey from requesting help to tracking the provider and reviewing the completed service.",
        items: [
          {
            src: "/images/projects/slideme/customer-home.png",
            alt: "SlideMe customer home screen with towing service request and recent activity",
            label: "Request service",
            description: "A customer dashboard that makes the primary towing request visible immediately while keeping recent activity close by.",
            orientation: "portrait",
          },
          {
            src: "/images/projects/slideme/customer-tracking.png",
            alt: "SlideMe customer trip screen showing a map and live service status",
            label: "Track the journey",
            description: "A map-led trip view combines route progress, service stages, and direct contact actions in one place.",
            orientation: "portrait",
          },
          {
            src: "/images/projects/slideme/customer-review.png",
            alt: "SlideMe customer review screen with service photos and driver rating",
            label: "Complete and review",
            description: "After the service, customers can inspect before-and-after evidence, rate the driver, and leave feedback.",
            orientation: "portrait",
          },
        ],
      },
      {
        id: "driver-app",
        label: "Driver App",
        description: "The driver-side flow supports finding available jobs, reviewing pickup details, coordinating arrival, and checking completed service records.",
        items: [
          {
            src: "/images/projects/slideme/driver-dashboard.png",
            alt: "SlideMe driver dashboard with driver profile, earnings, and available job search",
            label: "Find available work",
            description: "A driver dashboard brings profile status, current earnings, referral information, and the next job search into one starting point.",
            orientation: "portrait",
          },
          {
            src: "/images/projects/slideme/driver-pickup.png",
            alt: "SlideMe driver pickup details with map, location, estimated price, and customer message",
            label: "Review the pickup",
            description: "The active job view surfaces the map, pickup address, estimated price, customer notes, and an arrival confirmation action.",
            orientation: "portrait",
          },
          {
            src: "/images/projects/slideme/driver-history.png",
            alt: "SlideMe completed driver job with destination, vehicle, journey, customer, and rating details",
            label: "Inspect completed work",
            description: "A completed-job record keeps the destination, vehicle type, distance, customer information, and received rating together.",
            orientation: "portrait",
          },
        ],
      },
    ],
    relatedWorkHref: "/work/towing-car-booking-system",
  },
  {
    number: "02",
    slug: "sport-field-booking-system",
    title: "Sport Field Booking System (SFB)",
    shortTitle: "Sport Field Booking",
    category: "Full-stack booking platform",
    status: "Full-stack case study",
    summary: "A full-stack web application that streamlines discovering, booking, paying for, and managing sports facilities through connected customer and administrative workflows.",
    brief: "SFB addresses the complete sports-facility booking journey. Customers can discover venues, check court availability, rent equipment, pay with PromptPay, follow booking status, receive notifications, and manage their profiles, while administrators manage the operational data behind the service.",
    role: "Full-stack development · API design · Database architecture",
    tags: ["React", "Vite", "Ant Design", "Tailwind CSS", "Zustand", "Node.js", "Express", "MySQL", "Omise", "Docker Compose"],
    highlights: [
      { label: "Platform", value: "Full-stack web application" },
      { label: "User sides", value: "Customer & administrator" },
      { label: "Payment", value: "Omise PromptPay" },
    ],
    keyActivities: [
      "Built a responsive frontend with React, Vite, Ant Design, Tailwind CSS, and Zustand",
      "Developed RESTful APIs using Node.js and Express",
      "Designed and integrated a relational MySQL database",
      "Implemented JWT authentication, HTTP-only cookies, and role-based access control",
      "Prevented overlapping bookings and protected multi-table operations with database transactions",
      "Integrated Omise PromptPay payments with webhook-based status updates",
      "Added automatic cancellation for unpaid bookings and equipment stock restoration",
      "Documented API endpoints with Swagger and OpenAPI",
      "Used Docker Compose for the local MySQL and phpMyAdmin environment",
    ],
    features: [
      { title: "Venue discovery & availability", description: "Users can browse sports venues, inspect facility details, and check court availability before booking." },
      { title: "Booking & equipment rental", description: "A connected workflow handles court reservations and optional equipment inventory within the same booking." },
      { title: "PromptPay & booking status", description: "Omise PromptPay QR payments, webhook updates, notifications, and status tracking keep the reservation lifecycle visible." },
      { title: "Administrative operations", description: "The dashboard centralizes management of venues, courts, equipment, users, bookings, and payments." },
    ],
    galleryGroups: [
      {
        id: "customer-experience",
        label: "Customer Experience",
        description: "The customer-facing website supports discovering sports options and reviewing venue information before entering the reservation flow.",
        items: [
          {
            src: "/images/projects/sfb/customer-home.png",
            alt: "Sport Field Booking System customer landing page with sports categories and venue statistics",
            label: "Discover sports facilities",
            description: "The landing experience introduces available sports, venue discovery, membership actions, and the scale of the booking service.",
            orientation: "landscape",
          },
          {
            src: "/images/projects/sfb/venue-details.png",
            alt: "Sport Field Booking System venue detail page showing guest mode and court information",
            label: "Review venue details",
            description: "Customers can inspect venue information, operating hours, court availability, and booking requirements before choosing a court.",
            orientation: "landscape",
          },
        ],
      },
      {
        id: "admin-dashboard",
        label: "Admin Dashboard",
        description: "The administrative interface gives operators a structured view of facility inventory and reservation activity across the platform.",
        items: [
          {
            src: "/images/projects/sfb/admin-venues.png",
            alt: "Sport Field Booking System admin dashboard for managing venues",
            label: "Manage venues",
            description: "Administrators can add, edit, activate, and organize venues with their sport type, location, opening hours, and court count.",
            orientation: "landscape",
          },
          {
            src: "/images/projects/sfb/admin-bookings.png",
            alt: "Sport Field Booking System admin dashboard for filtering and managing reservations",
            label: "Monitor bookings",
            description: "Booking totals, payment states, search, date filters, and detailed reservation records support day-to-day operations.",
            orientation: "landscape",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    slug: "gamestore-online-game-store",
    title: "GameStore — Online Game Store Platform",
    shortTitle: "GameStore",
    category: "Full-stack commerce platform",
    status: "Solo full-stack project",
    summary: "A full-stack online game store that combines customer shopping flows with multi-role administration for games, publishers, users, orders, reviews, and platform operations.",
    brief: "GameStore was designed and developed as a solo full-stack project covering relational database design, backend development, business logic, custom authentication and authorization, customer-facing commerce flows, and administrative operations.",
    role: "Full-Stack Developer · Solo project",
    tags: ["ASP.NET Core MVC", "C#", "Entity Framework Core", "MySQL"],
    highlights: [
      { label: "Ownership", value: "Solo full-stack project" },
      { label: "Access model", value: "4 user roles" },
      { label: "Architecture", value: "ASP.NET Core MVC" },
    ],
    keyActivities: [
      "Designed the relational database and application structure",
      "Developed backend services and business logic with ASP.NET Core MVC and C#",
      "Built customer-facing game discovery, purchase, cart, order, library, review, and rating workflows",
      "Implemented custom session-based authentication and authorization",
      "Created role-based access for SuperAdmin, Admin, Publisher, and Customer",
      "Built administrative tools for games, publishers, users, approvals, and platform operations",
    ],
    features: [
      { title: "Browse & purchase games", description: "Customers can discover games, inspect details, manage a cart, place orders, and access purchased titles." },
      { title: "Reviews & ratings", description: "Game pages bring customer feedback and ratings into the shopping and discovery experience." },
      { title: "Multi-role access control", description: "Custom session-based authorization separates SuperAdmin, Admin, Publisher, and Customer responsibilities." },
      { title: "Administrative management", description: "A centralized dashboard supports game, publisher, user, approval, promotion, and platform management." },
    ],
    galleryGroups: [
      {
        id: "customer-storefront",
        label: "Customer Storefront",
        description: "The customer experience moves from discovering available games to reviewing product details, system requirements, pricing, promotions, reviews, and purchase actions.",
        items: [
          {
            src: "/images/projects/gamestore/storefront-home.png",
            alt: "GameStore customer storefront with featured and free games",
            label: "Discover games",
            description: "The storefront organizes popular and free games with pricing, ratings, categories, and direct paths into the catalogue.",
            orientation: "landscape",
          },
          {
            src: "/images/projects/gamestore/game-details.png",
            alt: "GameStore Battle Arena product detail page with promotion, wishlist, system requirements, and reviews",
            label: "Inspect a game",
            description: "The detail view combines screenshots, price and promotion state, wishlist actions, platform information, system requirements, and player reviews.",
            orientation: "landscape",
          },
        ],
      },
      {
        id: "admin-platform",
        label: "Admin Platform",
        description: "The administrative experience summarizes platform activity and provides role-aware entry points for managing users, games, publishers, promotions, rewards, and approvals.",
        items: [
          {
            src: "/images/projects/gamestore/admin-dashboard.png",
            alt: "GameStore SuperAdmin dashboard with platform metrics, approvals, and recent activity",
            label: "Operate the platform",
            description: "The SuperAdmin dashboard surfaces platform totals, pending approvals, recent activity, and management routes in one operational view.",
            orientation: "landscape",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    slug: "buddybuilder-ai-interior-design",
    title: "BuddyBuilder AI — AI-Powered Interior Design Assistant",
    shortTitle: "BuddyBuilder AI",
    category: "Agentic AI design platform",
    status: "AI product case study",
    summary: "An AI-powered interior design platform that combines a conversational design assistant, knowledge retrieval, and intelligent 3D furniture layout generation.",
    brief: "BuddyBuilder AI connects a Next.js product interface with a Python and FastAPI AI backend. Users can discuss their room requirements with an AI assistant, retrieve relevant design knowledge, and generate furniture layouts through an agentic pipeline that validates, repairs, and explains its results.",
    role: "Full-stack development · AI system architecture · 3D product experience",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "LangChain", "OpenRouter", "ChromaDB", "PostgreSQL", "SQLModel", "Pydantic"],
    highlights: [
      { label: "Architecture", value: "Next.js + FastAPI" },
      { label: "AI approach", value: "RAG + agentic pipeline" },
      { label: "Primary output", value: "Validated 3D layouts" },
    ],
    keyActivities: [
      "Built a conversational interior design assistant with real-time SSE response streaming",
      "Integrated retrieval-augmented generation for contextual design knowledge",
      "Connected room requirements to an automated 3D furniture layout pipeline",
      "Implemented spatial and design-rule validation for generated placements",
      "Added an automated repair loop to shift or rotate furniture when conflicts are detected",
      "Structured the FastAPI backend into modular domains following DDD principles",
      "Connected application and vector data through PostgreSQL, SQLModel, and ChromaDB",
    ],
    features: [
      { title: "Conversational design assistant", description: "Users can explain their room needs naturally and receive contextual interior design guidance through a focused chat experience." },
      { title: "RAG knowledge retrieval", description: "The assistant retrieves relevant design knowledge before composing responses, grounding recommendations in the available knowledge base." },
      { title: "AI-generated 3D layouts", description: "Room specifications are transformed into furniture placements and presented inside an interactive 3D workspace." },
      { title: "Validation & automatic repair", description: "An agentic pipeline checks spatial and design rules, repairs detected conflicts, scores the result, and explains the final layout." },
    ],
    galleryGroups: [
      {
        id: "product-experience",
        label: "Product Experience",
        description: "The product connects a conversational assistant with a visual room-design workspace, allowing design knowledge and generated layouts to live in one continuous experience.",
        items: [
          {
            src: "/images/projects/buddybuilder-ai/ai-assistant.png",
            alt: "BuddyBuilder AI conversational interior design assistant with a Thai design response",
            label: "Discuss the room",
            description: "The assistant answers interior design questions through a structured conversation interface with saved sessions and streaming responses.",
            orientation: "landscape",
          },
          {
            src: "/images/projects/buddybuilder-ai/3d-workspace.png",
            alt: "BuddyBuilder AI 3D room workspace with Feng Shui score and AI explanation",
            label: "Generate and evaluate",
            description: "The workspace combines 3D furniture placement, a design-rule score, an editable furniture library, and an explanation from the AI assistant.",
            orientation: "landscape",
          },
        ],
      },
      {
        id: "agentic-layout-pipeline",
        label: "Agentic Layout Pipeline",
        description: "The backend moves from structured room input to JSON generation, rule checking, automatic repair, evaluation, and a final explainable 3D result.",
        items: [
          {
            src: "/images/projects/buddybuilder-ai/agentic-pipeline.png",
            alt: "BuddyBuilder AI agentic pipeline from room input through generation, rule checking, repair, and explanation",
            label: "Validate before delivery",
            description: "Generated layouts pass through deterministic checks; detected conflicts trigger a repair loop before the system scores and explains the result.",
            orientation: "landscape",
          },
        ],
      },
    ],
    relatedWorkHref: "/work/agentic-ai-3d-furniture-layout",
  },
] as const satisfies readonly SoftwareProject[];

export function getProjectBySlug(slug: string): SoftwareProject | undefined {
  return projectItems.find((project) => project.slug === slug);
}
