import { ServiceItem } from "@/types/services";
import { Code, HeartHandshake, Building2, Rocket } from "lucide-react";

export const servicesData: ServiceItem[] = [
  {
    id: "consulting",
    number: "01",
    title: "Software Consulting Services",
    description:
      "Strategic technology consulting to help businesses navigate digital transformation, optimize processes, and make informed decisions for sustainable growth.",
    icon: HeartHandshake,
  },
  {
    id: "custom-development",
    number: "02",
    title: "Custom Software Development Services",
    description:
      "In today's highly volatile and competitive market landscape, custom software development helps you to achieve the desired business proficiency. Our software development company delivers just the right software services tailored to your unique business needs.",
    icon: Code,
  },
  {
    id: "enterprise",
    number: "03",
    title: "Enterprise Software Development Services",
    description:
      "Scalable enterprise solutions that streamline operations, enhance productivity, and drive digital innovation across your organization.",
    icon: Building2,
  },
  {
    id: "product",
    number: "04",
    title: "Software Product Development Services",
    description:
      "End-to-end product development services from ideation to deployment, helping you build innovative software products that drive market success.",
    icon: Rocket,
  },
];
