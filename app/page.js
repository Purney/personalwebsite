import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <>
      <Hero
        title="Freelance Software Engineer in Bournemouth"
        description="Hi, I’m Will, a developer specializing in .NET, React, and Generative AI solutions.
              Let’s build something great together!"
        buttonLink="#contact"
        buttonText="Get in Touch"
      />
      <ServicesGrid />
      <PortfolioGrid />
      {/* Bournemouth Focus Section */}
      <section className="py-24 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Hire a Bournemouth-Based Software Engineer?
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Based in Bournemouth, I provide local expertise with a deep
          understanding of the needs of businesses in the area. Whether you're a
          startup or a web agency, I can help you build exceptional software
          solutions.
        </p>
      </section>

      <ContactForm />
    </>
  );
}
