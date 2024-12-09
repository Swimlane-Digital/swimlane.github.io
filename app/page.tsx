import { SuccessStories } from "@/components/case-studies/case-study";
import { FAQSection } from "@/components/faq/faqs-section";
import { CostEstimation } from "@/components/forms/cost-estimation";
import { IndustrySection } from "@/components/industries/industry-section";
import { CredibilityFactors } from "@/components/marketing/credebility-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { ServicesSection } from "@/components/services/service-section";
import { StatsSection } from "@/components/stats/stats-section";
import { TestimonialsSection } from "@/components/testimonials/testimonial-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <IndustrySection />
      <CredibilityFactors />
      <SuccessStories />
      <TestimonialsSection />
      <CostEstimation />
      <FAQSection />
    </main>
  );
}
