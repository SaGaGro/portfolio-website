export type ProjectGalleryItem = {
  src: string;
  alt: string;
  label: string;
  description: string;
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
          },
          {
            src: "/images/projects/slideme/customer-tracking.png",
            alt: "SlideMe customer trip screen showing a map and live service status",
            label: "Track the journey",
            description: "A map-led trip view combines route progress, service stages, and direct contact actions in one place.",
          },
          {
            src: "/images/projects/slideme/customer-review.png",
            alt: "SlideMe customer review screen with service photos and driver rating",
            label: "Complete and review",
            description: "After the service, customers can inspect before-and-after evidence, rate the driver, and leave feedback.",
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
          },
          {
            src: "/images/projects/slideme/driver-pickup.png",
            alt: "SlideMe driver pickup details with map, location, estimated price, and customer message",
            label: "Review the pickup",
            description: "The active job view surfaces the map, pickup address, estimated price, customer notes, and an arrival confirmation action.",
          },
          {
            src: "/images/projects/slideme/driver-history.png",
            alt: "SlideMe completed driver job with destination, vehicle, journey, customer, and rating details",
            label: "Inspect completed work",
            description: "A completed-job record keeps the destination, vehicle type, distance, customer information, and received rating together.",
          },
        ],
      },
    ],
    relatedWorkHref: "/work/towing-car-booking-system",
  },
] as const satisfies readonly SoftwareProject[];

export function getProjectBySlug(slug: string): SoftwareProject | undefined {
  return projectItems.find((project) => project.slug === slug);
}
