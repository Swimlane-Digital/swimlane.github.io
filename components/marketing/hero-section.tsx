import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-black/50">
        {/* Add your background image here */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      </div>

      <Container className="relative grid items-center gap-8 pb-8 pt-24 md:grid-cols-2 md:pb-24">
        <div className="flex flex-col items-start gap-4 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Custom Software
            <span className="block text-blue-400">Development Solutions</span>
          </h1>
          <p className="max-w-[600px] text-lg text-gray-200 sm:text-xl">
            Transform your business with cutting-edge custom software solutions
            designed to drive innovation and accelerate growth.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
