import { NavItem } from "@/types/nav";

export const navigationConfig: NavItem[] = [
  {
    title: "LET'S TALK AI",
    href: "/lets-talk-ai",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "SERVICES",
    items: [
      {
        title: "IDEATION AND PRODUCT DESIGN",
        items: [{ title: "UI/UX", href: "/services/ui-ux" }],
      },
      {
        title: "MOBILE APP DEV",
        items: [
          { title: "PWA", href: "/services/pwa" },
          { title: "Mobile first Design", href: "/services/mobile-first" },
        ],
      },
      {
        title: "SOFTWARE DEVELOPMENT",
        items: [
          { title: "ERP Software development", href: "/services/erp" },
          { title: "Custom CRM", href: "/services/crm" },
          { title: "AR/VR Development", href: "/services/ar-vr" },
          { title: "IoT Development", href: "/services/iot" },
          { title: "Microservices", href: "/services/microservices" },
          {
            title: "Product Development",
            href: "/services/product-development",
          },
        ],
      },
      {
        title: "BLOCKCHAIN SERVICES",
        items: [
          { title: "NFT Marketplace", href: "/services/nft" },
          { title: "Metaverse Development", href: "/services/metaverse" },
          { title: "Dapp development", href: "/services/dapp" },
        ],
      },
    ],
  },
  {
    title: "INDUSTRIES",
    href: "/industries",
  },
  {
    title: "PORTFOLIO",
    href: "/portfolio",
  },
  {
    title: "RESOURCES",
    href: "/resources",
  },
];
