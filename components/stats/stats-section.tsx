import { Button } from "@/components/ui/button";
import { StatsCard } from "./stats-card";

const stats = [
  {
    value: 9,
    label: "Years in Custom Software Development",
    suffix: "+",
  },
  {
    value: 3000,
    label: "Software Projects Delivered",
    suffix: "+",
  },
  {
    value: 1600,
    label: "Certified Technology Professionals",
    suffix: "+",
  },
  {
    value: 98,
    label: "Client Retention Rate",
    suffix: "%",
  },
];

export function StatsSection() {
  return (
    <section className="w-full bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gray-800 bg-opacity-50 p-8 shadow-lg backdrop-blur-sm">
          <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-blue-600 px-8 py-6 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Schedule Consultation Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
