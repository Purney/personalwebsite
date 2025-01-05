import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonalComponent from "@/components/TestimonalComponent";
import headshot from "../assets/images/william-purnell-headshot.png";
import ImageWithTextComponent from "@/components/ImageWithTextComponent";
import ShowcaseComponent from "@/components/ShowcaseComponent";
import { Data } from "@/data/servicesData";

export const metadata = {
  title: "William Purnell - Software Developer from Bournemouth",
  description:
    "Will is a software developer with 5 years experience based in Bournemouth",
};

export default function Home() {
  const image = {
    src: headshot,
    alt: "William Purnell headshot"
  };

  const aboutUsCopy = `Hi I'm Will, </br> I'm a Bournemouth Based Software Developer 
  with 5+ years of expertise in software development to local businesses 
  and startups. </br>I have created and maintained a wide range of projects 
  in .NET Framework / Core (C#) and Next.js (React) within a multitude of industries from education to 3D printing.
  </br>
  Whether you're looking for web development, AI integration,
  or custom software, I can help you achieve your goals.`

  const servicesCopy = `Looking for expert software development services 
  in Bournemouth? You’re in the right place. 
  With years of experience in .NET, React, and AI technologies, I provide end-to-end solutions that help businesses thrive in today’s digital landscape.`

  const services = Data;

  return (
    <>
      <Hero
        title="Expert Freelance Software Developer in Bournemouth"
        description="Specialising in .NET, React, and AI Integration to Build Custom Solutions for Local Bournemouth Businesses!"
        buttonLink="#contact"
        buttonText="Get in Touch for a Free Consultation"
      />
      <ImageWithTextComponent image={image} title="About Me" text={aboutUsCopy} buttonLink="/about" buttonText="Learn More" />
      <ShowcaseComponent title="Services" text={servicesCopy} buttonLink="/services" buttonText="Explore Our Services" services={services} />
      <PortfolioGrid />
      <ContactForm />
      <TestimonalComponent />
    </>
  );
}
