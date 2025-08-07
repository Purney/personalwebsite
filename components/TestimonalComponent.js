import Image from "next/image";
import { Data } from "@/data/testimonialData";
import { getTestimonialSchema } from "@/lib/seo";
import FadeInAndOutWrapper from "./AnimationWrappers/FadeInAndOutWrapper";
import Link from "next/link";

export default function TestimonalComponent() {
  const testimonials = Data.slice(0, 3);

  return (
    <section className="py-16 md:py-16 bg-dark-section text-cta-text">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h3 className="text-3xl font-bold text-center mb-8">
          What my clients say
        </h3>
        <FadeInAndOutWrapper className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-28 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              className="relative group card shadow-sm p-6 border-2 flex flex-col gap-8 justify-between overflow-hidden"
              key={"testimonial-" + index}
            >
              {getTestimonialSchema(testimonial.name, testimonial.quote)}
              {/* Overlay for blur and link */}
              {testimonial.projectLink && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Link
                    href={testimonial.projectLink}
                    className="text-white bg-primary px-6 py-2 rounded font-bold text-lg shadow-lg"
                  >
                    View Project
                  </Link>
                </div>
              )}
              {/* Quote at the top */}
              <q className="text-sm italic">{testimonial.quote}</q>
              {/* Client logo and info always at the bottom */}
              <div className="relative z-0 mt-auto" id="clientLogo">
                <div className="flex md:flex-row flex-col justify-center">
                  <div className="flex justify-items-center gap-3 px-5 py-5 items-center">
                    <Image
                      className="w-16 h-16 object-cover rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name + " picture"}
                    />
                    <div className="text-left content-center">
                      <p className="font-bold text-xs md:text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xxs md:text-xs">{testimonial.role}</p>
                      <p className="text-xxs md:text-xs font-bold">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </FadeInAndOutWrapper>
      </div>
    </section>
  );
}
