export const site = {
  name: "Tushar Sohal",
  role: "Software Developer",
  location: "Ambala, Haryana",
  email: "tusharsohal2003@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1xzHCliRKpTbM_S3P3dEHQOpJYN0dXGnm/view?usp=sharing",
  mediumUrl: "https://medium.com/@tusharsohal",
  mediumFeed: "https://medium.com/feed/@tusharsohal",
  profileImage: "/profile.png",
  profilePassport: "/profile-passport.png",
  tagline:
    "I build production systems at the edge of product, AI, and growth — APIs, agents, and frontend that ship.",
  about: [
    "I'm a software developer currently at NetZen AI (Waterloo, remote), where I own client-facing APIs, LangGraph-powered retrieval systems, and end-to-end install pipelines that keep devices healthy in the field.",
    "Before that, I shipped growth features across four DTC brands at TMRW House of Brands — cart coupons, checkout nudges, and PLP UX — with measurable conversion lifts and A/B-backed decisions.",
    "I care about clear systems, maintainable TypeScript, and turning ambiguous requirements into things people actually use.",
  ],
};

export const socials = [
  {
    label: "Email",
    href: "mailto:tusharsohal2003@gmail.com",
    value: "tusharsohal2003@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+919050619778",
    value: "+91 9050619778",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tushar-sohal",
    value: "linkedin.com/in/tushar-sohal",
  },
  {
    label: "GitHub",
    href: "https://github.com/tush47",
    value: "github.com/tush47",
  },
  {
    label: "Medium",
    href: "https://medium.com/@tusharsohal",
    value: "medium.com/@tusharsohal",
  },
] as const;

export const experience = [
  {
    title: "Software Developer",
    company: "NetZen AI",
    location: "Waterloo, Canada",
    workMode: "Remote",
    period: "Sept 2025 – Present",
    skills: [
      "TypeScript",
      "Next.js",
      "Firestore",
      "OpenAPI",
      "Vitest",
      "LangGraph",
      "Docker",
      "Qdrant",
    ],
    highlights: [
      "Built scalable client-facing APIs and a LangGraph-based internal search system for intelligent retrieval over company and proprietary data, powering a RAG support desk used company-wide.",
      "Owned the end-to-end software installation pipeline (POC to production), including a TypeScript macOS background agent for silent install/updates and live device diagnostics (memory, network, VPN, installed apps, A/V status).",
      "Hardened production systems for SOC 2 readiness — CSP, structured logging/alerting, audit trails, and backup strategies for storage and authentication.",
      "Designed internal service-request workflows (hardware, peripherals, software provisioning) and Teams bot integrations using Adaptive Cards to automate support-email notifications, cutting manual coordination.",
      "Partner closely with architecture and cross-functional teams, translating ambiguous requirements into maintainable, production-ready systems.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "TMRW House of Brands",
    location: "Bengaluru, Karnataka (560103)",
    workMode: "Hybrid",
    period: "Jan 2025 – July 2025",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Shopify", "Next.js"],
    highlights: [
      "Shipped growth-focused frontend features across four DTC brands (Wrogn, Bewakoof, Juneberry, Veirdo), pitching solutions directly to the CTO and senior architects for production sign-off.",
      "Drove a 16% lift in cart conversions by owning a cart-coupon feature for Wrogn end-to-end, and a 4% checkout uplift via a cart-nudge for Veirdo.",
      "Raised PLP conversions 6% through targeted UX and inline enhancements, backed by A/B testing and analytics.",
      "Embedded in Scrum, design reviews, and QA/UAT cycles, collaborating tightly with design and product stakeholders.",
    ],
  },
] as const;

export const education = [
  {
    school: "National Institute of Technology, Kurukshetra, Haryana",
    degree: "Bachelor of Technology in Computer Engineering",
    period: "December 2021 – July 2025",
    details: [
      "Coursework: Data Structures & Algorithms, OOPs, Operating Systems, Mobile Application Development (Android Studio), Database Management Systems.",
    ],
  },
  {
    school: "Police DAV Public School, Ambala, Haryana",
    degree: "Intermediate, Non-medical · CBSE",
    period: "2019 – 2020",
    details: [],
  },
  {
    school: "Police DAV Public School, Ambala, Haryana",
    degree: "Matriculation · CBSE",
    period: "2017 – 2018",
    details: [],
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C",
      "SQL",
      "HTML",
      "CSS",
      "Shopify Liquid",
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "Nest.js",
      "Docker",
      "Firestore",
      "LangGraph",
      "Qdrant",
      "Vitest",
      "Hugging Face",
      "Git",
    ],
  },
  {
    title: "Analytics & Experimentation",
    items: [
      "Google Analytics",
      "GTM",
      "Event Tracking",
      "A/B Testing",
      "GrowthBook",
      "Miro",
      "Excalidraw",
    ],
  },
] as const;

export type Project = {
  title: string;
  description: string;
  href?: string;
  tags: string[];
};

/** Add projects here — section appears on the homepage once this list is non-empty. */
export const projects: Project[] = [];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blog" },
  { label: "Message", href: "#message" },
  { label: "Contact", href: "#contact" },
] as const;
