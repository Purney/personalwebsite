import Image from "next/image";
import Link from "next/link";
import { getTestimonialSchema } from "@/lib/seo";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="flex h-full flex-col border border-white/10 bg-slate-950/70 p-6">
      {getTestimonialSchema(testimonial.name, testimonial.quote)}
      <q className="text-base leading-7 text-slate-200">{testimonial.quote}</q>
      <div className="mt-8 flex items-center gap-4">
        <Image
          className="h-14 w-14 rounded-full object-cover"
          src={testimonial.image}
          alt={`${testimonial.name} portrait`}
        />
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-slate-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
      {testimonial.projectLink && (
        <Link
          href={testimonial.projectLink}
          className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-accent-cyan hover:text-white"
        >
          View related project
        </Link>
      )}
    </article>
  );
}
