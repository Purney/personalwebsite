import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article
      className="group flex h-full flex-col border border-white/10 bg-white/[0.04] p-6 transition hover:border-accent-cyan/60 hover:bg-white/[0.07]"
    >
      <Link href={`/services/${service.slug}`} className="flex h-full flex-col">
        <div className="mb-5 flex h-12 w-12 items-center justify-center border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
        <p className="mt-5 text-sm leading-6 text-slate-400">{service.longDescription}</p>
        {service.outcome && (
          <p className="mt-auto pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent-green">
            {service.outcome}
          </p>
        )}
        <span className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent-cyan">
          View service
        </span>
      </Link>
    </article>
  );
}
