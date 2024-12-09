import { Industry } from "@/types/industry";
import {
  Coins,
  Building2,
  Shield,
  Banknote,
  Car,
  Heart,
  ShoppingCart,
  ShoppingBag,
  Factory,
  HardHat,
  Box,
  Plane,
} from "lucide-react";

export const industries: Industry[] = [
  {
    id: "fintech",
    icon: Coins,
    title: "FinTech",
    description:
      "As an established FinTech software development services provider, our expert software developers can cater to the FinTech industry's security, speed, seamless navigation requirements.",
    link: "/industries/fintech",
  },
  {
    id: "banking",
    icon: Building2,
    title: "Banking",
    description:
      "Custom banking solutions with robust security features and seamless integration capabilities.",
    link: "/industries/banking",
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance",
    description:
      "Custom insurance solutions with robust security features and seamless integration capabilities.",
    link: "/industries/insurance",
  },
  {
    id: "financial-services",
    icon: Banknote,
    title: "Financial Services",
    description:
      "Custom financial services solutions with robust security features and seamless integration capabilities.",
    link: "/industries/financial-services",
  },
  {
    id: "healthcare",
    icon: Car,
    title: "Healthcare",
    description:
      "Custom healthcare solutions with robust security features and seamless integration capabilities.",
    link: "/industries/healthcare",
  },
  {
    id: "retail",
    icon: Heart,
    title: "Retail",
    description:
      "Custom retail solutions with robust security features and seamless integration capabilities.",
    link: "/industries/retail",
  },
  {
    id: "logistics",
    icon: ShoppingCart,
    title: "Logistics",
    description:
      "Custom logistics solutions with robust security features and seamless integration capabilities.",
    link: "/industries/logistics",
  },
  {
    id: "manufacturing",
    icon: ShoppingBag,
    title: "Manufacturing",
    description:
      "Custom manufacturing solutions with robust security features and seamless integration capabilities.",
    link: "/industries/manufacturing",
  },
  {
    id: "transportation",
    icon: Factory,
    title: "Transportation",
    description:
      "Custom transportation solutions with robust security features and seamless integration capabilities.",
    link: "/industries/transportation",
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction",
    description:
      "Custom construction solutions with robust security features and seamless integration capabilities.",
    link: "/industries/construction",
  },
  {
    id: "real-estate",
    icon: Box,
    title: "Real Estate",
    description:
      "Custom real estate solutions with robust security features and seamless integration capabilities.",
    link: "/industries/real-estate",
  },
  {
    id: "energy",
    icon: Plane,
    title: "Energy",
    description:
      "Custom energy solutions with robust security features and seamless integration capabilities.",
    link: "/industries/energy",
  },
];
