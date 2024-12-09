import { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  {
    id: "ikea",
    company: "IKEA",
    logo: "/companies/ikea-logo.svg",
    description:
      "We helped the world's finest furniture retailer redefine its customer onboarding process with the help of custom ERP solutions integrated on aisle kiosks across IKEA outlets.",
    image: "/case-studies/ikea-store.jpg",
    results: {
      title: "The Results?",
      stats: "7+",
      description: "IKEA Outlets Adopted the Solution",
    },
  },
  // Add more case studies...
];

export const companyLogos = [
  { name: "llity", active: false },
  { name: "IKEA", active: true },
  { name: "KFC", active: false },
  { name: "AVATUS", active: false },
  { name: "JobGet", active: false },
  { name: "Adidas", active: false },
];
