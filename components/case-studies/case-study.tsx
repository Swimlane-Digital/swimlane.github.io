"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { caseStudies, companyLogos } from "@/lib/constants/case-study";
import Image from "next/image";

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Here&apos;s a quick glance at some of our most prominent custom
            software application development service projects:
          </motion.p>
        </div>

        {/* Slider */}
        <div className="relative rounded-2xl bg-gray-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid min-h-[500px] grid-cols-1 lg:grid-cols-2"
            >
              {/* Content */}
              <div className="flex flex-col justify-between p-8 lg:p-12">
                <div>
                  <Image
                    src="/api/placeholder/200/80"
                    alt={caseStudies[currentIndex].company}
                    className="mb-8 h-12"
                    width={200}
                    height={80}
                  />
                  <p className="mb-8 text-lg text-gray-300">
                    {caseStudies[currentIndex].description}
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {caseStudies[currentIndex].results.title}
                  </h3>
                  <p className="mb-2 text-4xl font-bold text-blue-500">
                    {caseStudies[currentIndex].results.stats}
                  </p>
                  <p className="text-gray-400">
                    {caseStudies[currentIndex].results.description}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-white text-white hover:bg-white/10"
                  >
                    Read Case Study
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative hidden lg:block">
                <Image
                  src="/api/placeholder/800/500"
                  alt="Case study"
                  className="h-full w-full rounded-r-2xl object-cover"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-r-2xl" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute left-4 right-4 top-1/2 z-10 flex -translate-y-1/2 justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-12 flex justify-center space-x-8">
          {companyLogos.map((company, index) => (
            <button
              key={company.name}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "text-lg font-medium transition-colors",
                company.active
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-400"
              )}
            >
              {company.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
