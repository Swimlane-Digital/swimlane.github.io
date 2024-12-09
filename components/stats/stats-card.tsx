"use client";

import { useCounter } from "@/hooks/use-counter";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatsCardProps {
  value: number;
  label: string;
  suffix?: string;
}

export function StatsCard({ value, label, suffix = "" }: StatsCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCounter(value);

  const displayCount = isInView ? count : 0;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <div className="text-5xl font-bold text-white md:text-6xl">
        {displayCount}
        {suffix}
      </div>
      <p className="mt-2 text-center text-sm text-gray-400 md:text-base">
        {label}
      </p>
    </div>
  );
}
