"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/lib/constants/services-data";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  return (
    <section className="w-full bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Comprehensive Suite of Custom Software Development Services
          </h2>
          <p className="text-lg text-gray-400">
            Our custom software development process revolves around a
            hyper-focused approach that prioritizes the tailoring of user
            experiences and the creation of highly efficient solutions. With our
            service offerings, we guarantee a transparent and trusted
            partnership that guarantees delivery of impactful and innovative
            software development solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Tabs List */}
          <div className="flex flex-col space-y-2">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "group relative overflow-hidden rounded-xl p-6 text-left transition-all duration-300",
                  activeTab === service.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-900 text-gray-400 hover:bg-gray-800"
                )}
              >
                <div className="relative z-10">
                  <span className="mb-2 block text-sm font-medium opacity-60">
                    {service.number}.
                  </span>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="relative rounded-2xl bg-gray-900 p-8">
            <AnimatePresence mode="wait">
              {servicesData.map((service) =>
                service.id === activeTab ? (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-start space-y-4"
                  >
                    <div className="rounded-lg bg-blue-600 p-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
