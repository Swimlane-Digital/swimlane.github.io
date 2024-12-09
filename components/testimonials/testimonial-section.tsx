"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/constants/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section className="w-full bg-black py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
          >
            Testimonials that Prove Our Software Development Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            With over 3,000 businesses served globally and a 95% client
            retention rate over the past nine years, here is what our clients
            have to say about our software development services.
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative rounded-2xl bg-gray-900/50 p-8 backdrop-blur-sm md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
                {/* Author Info */}
                <div className="flex flex-col items-center text-center md:w-48">
                  <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src="/api/placeholder/96/96"
                      alt={testimonials[currentIndex].author.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].author.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {testimonials[currentIndex].author.role},
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonials[currentIndex].author.company}
                  </p>
                </div>

                {/* Testimonial Content */}
                <div className="relative flex-1">
                  <Quote className="absolute -left-4 -top-4 h-8 w-8 text-blue-500 opacity-50" />
                  <blockquote className="relative pl-4 text-lg text-gray-200">
                    {testimonials[currentIndex].content}
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "w-8 bg-blue-500"
                    : "w-1.5 bg-gray-600 hover:bg-gray-500"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
