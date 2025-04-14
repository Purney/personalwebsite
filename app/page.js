import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonalComponent from "@/components/TestimonalComponent";
import headshot from "../assets/images/william-purnell-headshot.png";
import ImageWithTextComponent from "@/components/ImageWithTextComponent";
import ShowcaseComponent from "@/components/ShowcaseComponent";
import { Data } from "@/data/servicesData";
import { getSEOTags, getWebsiteSchema, getPersonSchema } from "@/lib/seo";
import TextCarouselHorizontalComponent from "@/components/TextCarouselHorizontalComponent";

export const metadata = getSEOTags({
  title: "William Purnell - Freelance Software Developer from Bournemouth",
  description:
    "Will is a freelance developer in Bournemouth with over 5 years experience",
});

export default async function Home() {
  const image = {
    src: headshot,
    alt: "William Purnell headshot",
  };

  const aboutUsCopy = `Hello! I'm Will, </br> I'm a Software Developer from Bournemouth
  with over 5 years of experience working with local agencies and startups. </br>I have created and maintained a wide range of projects 
  in .NET Framework / Core (C#) and Next.js (React) within a variety of industries from education to manufacturing and 3D printing.
  </br>
  Whether you're looking for your first website, or looking to improve your companies efficiency with custom software,
  I'm confident I can help you achieve your goals.`;

  const servicesCopy = `Looking for expert software development services 
  in Bournemouth? You’re in the right place. 
  With years of experience in .NET, React, and AI technologies, I provide end-to-end solutions that help businesses thrive in today’s digital landscape.`;

  return (
    <>
      {getWebsiteSchema()}
      {getPersonSchema()}
      <Hero
        title="Freelance Software Developer for Hire"
        description="Helping small businesses improve their efficiency through custom solutions, automation and AI!"
        buttonLink="#contact"
        buttonText="Get in Touch for a Free Consultation"
      />
      <TextCarouselHorizontalComponent />
      <ImageWithTextComponent
        format="text-left"
        image={image}
        title="About Me"
        text={aboutUsCopy}
        buttonLink="/about"
        buttonText="Learn More"
      />
      <PortfolioGrid />
      {Data.length > 0 && (
        <ShowcaseComponent
          title="Services"
          text={servicesCopy}
          buttonLink="/services"
          buttonText="Explore Our Services"
          services={Data}
        />
      )}
      <TestimonalComponent />
      <ContactForm />
    </>
  );
}
