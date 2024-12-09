"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface FactorItem {
  id: string;
  number: string;
  title: string;
  description: string;
  links?: Array<{
    text: string;
    url: string;
  }>;
}

const factors: FactorItem[] = [
  {
    id: "quality",
    number: "001",
    title: "Quality Product",
    description:
      "As the best custom software development company in USA, we first",
    links: [
      {
        text: "build an MVP",
        url: "/services/mvp",
      },
    ],
  },
  {
    id: "agile",
    number: "002",
    title: "Agile Software Services",
    description:
      "As an esteemed software solution company, our team, with its rich expertise and diverse experience, optimizes all processes and employs the best",
    links: [
      {
        text: "agile practices",
        url: "/services/agile",
      },
    ],
  },
  {
    id: "security",
    number: "003",
    title: "Security and Compliance",
    description:
      "As a trusted custom software development company, we adhere to relevant regulatory compliance and data security measures. We continually update our security protocols to counter emerging threats and maintain a secure, compliant environment tailored to your needs.",
  },
  {
    id: "technology",
    number: "004",
    title: "Latest Technology Stack",
    description:
      "As a remarkable software development services company, we utilize a range of advanced technologies and programming languages for your project that guarantees seamless integration of processes, from system architecture to frontend and backend development and post-delivery maintenance.",
  },
];

export function CredibilityFactors() {
  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
          >
            Factors that Cement Our Credibility as a Custom Software Development
            Company
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            With almost a decade of experience in the industry, we have the
            expertise to handle software development projects of diverse
            complexity levels, making Appinventiv&apos;s custom software
            development services the right fit for your{" "}
            <Link
              href="/services/it-consulting"
              className="text-blue-500 hover:text-blue-400"
            >
              IT consulting
            </Link>{" "}
            needs.
          </motion.p>
        </div>

        {/* Factors Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {factors.map((factor, index) => (
            <motion.div
              key={factor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-t border-gray-800 pt-8"
            >
              <span className="mb-4 block font-mono text-sm text-gray-600">
                {factor.number}
              </span>
              <h3 className="mb-4 text-2xl font-bold text-white">
                {factor.title}
              </h3>
              <p className="text-gray-400">
                {factor.description}
                {factor.links?.map((link, i) => (
                  <span key={i}>
                    {" "}
                    <Link
                      href={link.url}
                      className="text-blue-500 hover:text-blue-400"
                    >
                      {link.text}
                    </Link>
                    {factor.id === "quality" &&
                      " to test the efficiency of your product. We ensure the implementation of rigorous testing techniques, obtain continuous feedback to meet user requirements and deliver a user-friendly and intuitive software solution."}
                    {factor.id === "agile" &&
                      " for offering mobile software development services, leading to a reduction in custom software application development time by approximately 50%."}
                  </span>
                ))}
              </p>
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg bg-white/[0.02] transition group-hover:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
