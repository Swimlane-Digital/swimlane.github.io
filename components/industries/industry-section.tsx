"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { industries } from "@/lib/constants/industry";

export function IndustrySection() {
  const [activeIndustry, setActiveIndustry] = useState<string | undefined>(
    undefined
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen w-full bg-black py-16">
      <div className="container mx-auto flex flex-col gap-8 px-4 lg:flex-row">
        {/* Left Content - Sticky */}
        <div className="lg:sticky lg:top-8 lg:h-fit lg:w-1/2">
          <div className="pr-8">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Proven Capabilities to Build Diverse Industry-Based Software
            </h2>
            <p className="text-lg text-gray-400">
              As an industry leader in software application development
              services, our dedicated team works around the clock to build
              custom technology solutions tailored to your industry and business
              needs. We focus on delivering high-quality, scalable, and secure
              applications that drive efficiency and innovation. Our expertise
              spans various industries, ensuring that we can meet the unique
              challenges and requirements of your sector.
            </p>
          </div>
        </div>

        {/* Right Content - Scrollable Accordion */}
        <div
          ref={scrollContainerRef}
          className="lg:h-[500px] lg:w-1/2 lg:overflow-y-auto custom-scrollbar"
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            value={activeIndustry}
            onValueChange={setActiveIndustry}
          >
            {industries.map((industry) => (
              <AccordionItem
                key={industry.id}
                value={industry.id}
                className="border-b border-gray-800"
              >
                <AccordionTrigger className="flex items-center gap-4 py-6 text-white hover:no-underline">
                  <industry.icon className="h-6 w-6" />
                  <span className="text-xl font-semibold">
                    {industry.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="pb-4"
                  >
                    {industry.description}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
