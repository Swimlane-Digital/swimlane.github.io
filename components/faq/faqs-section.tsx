"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqItems } from "@/lib/constants/faqs";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (question: string) => {
    setOpenItem(openItem === question ? null : question);
  };

  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold md:text-5xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mx-auto grid max-w-4xl gap-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleItem(item.question)}
                className={cn(
                  "w-full rounded-2xl bg-white p-6 text-left shadow-sm transition-all hover:shadow-md",
                  openItem === item.question && "ring-2 ring-blue-500",
                  item.isHighlighted && "ring-2 ring-blue-500"
                )}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={cn(
                      "text-lg font-semibold",
                      item.isHighlighted ? "text-blue-600" : "text-gray-900"
                    )}
                  >
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform",
                      openItem === item.question && "rotate-180"
                    )}
                  />
                </div>

                <AnimatePresence>
                  {openItem === item.question && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
