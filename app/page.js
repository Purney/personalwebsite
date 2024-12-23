import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonalComponent from "@/components/TestimonalComponent";
import placeholder from "../assets/images/placeholder.jpg";
import ImageWithTextComponent from "@/components/ImageWithTextComponent";
import ShowcaseComponent from "@/components/ShowcaseComponent";
import { FaCode, FaComment, FaReact, FaRobot } from "react-icons/fa";
import { Data } from "@/data/servicesData";

export const metadata = {
  title: "William Purnell - Software Developer from Bournemouth",
  description:
    "Will is a software developer with 5 years experience based in Bournemouth",
};

export default function Home() {
  const image = {
    src: placeholder,
    alt: "About us Image"
  };

  const aboutUsCopy = `Based in Bournemouth, we bring 5+ years of expertise in software development to local businesses and startups. Specializing in .NET and React, we deliver tailor-made solutions to help your business grow. Whether you're looking for web development, generative AI integration, or custom software, we're your trusted local partner.`

  const servicesCopy = `Looking for expert software development services in Bournemouth? You’re in the right place. With years of experience in .NET, React, and AI technologies, I provide end-to-end solutions that help businesses thrive in today’s digital landscape.`

  const services = Data;

  return (
    <>
      <Hero
        title="Expert Freelance Software Developer in Bournemouth"
        description="Specialising in .NET, React, and AI Integration to Build Custom Solutions for Local Bournemouth Businesses!"
        buttonLink="#contact"
        buttonText="Get in Touch for a Free Consultation"
      />
      <ImageWithTextComponent image={image} title="About Us" text={aboutUsCopy} buttonLink="/about" buttonText="Learn More" />
      <ShowcaseComponent title="Services" text={servicesCopy} buttonLink="/services" buttonText="Explore Our Services" services={services} />
      <PortfolioGrid />
      <ContactForm />
      <TestimonalComponent />
    </>
  );
}
