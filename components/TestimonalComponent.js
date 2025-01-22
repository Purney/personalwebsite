import Image from "next/image";
import { Data } from "@/data/testimonialData";
import { getTestimonialSchema } from "@/lib/seo";

export default function TestimonalComponent() {
  const testimonials = Data.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h3 className="text-3xl font-bold text-center mb-8">What My Clients Say</h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-28 gap-8">
          {testimonials.map((testimonial, index) => (
            <>
            {getTestimonialSchema(testimonial.name, testimonial.quote)}
            <div
              className="card shadow-sm p-6 border-gray-200 border-2 flex flex-col gap-8 justify-between"
              key={"testimonial-" + index}
            >
              <q className="text-sm text-left">{testimonial.quote}</q>
              <div className="bg-gray-200 flex md:flex-row flex-col justify-center">
                <div className="flex justify-items-center gap-3 px-5 py-5 items-center">
                  <Image
                    className="w-16 h-16 object-cover rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name + " picture"}
                  />

                  <div className="text-left content-center "> 
                    <p className="font-bold text-xs md:text-sm">{testimonial.name}</p>
                    <p className="text-xxs md:text-xs">{testimonial.role}</p>
                    <p className="text-xxs md:text-xs font-bold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
