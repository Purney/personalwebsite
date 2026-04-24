import Link from "next/link";

export default function CTASection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
            Next step
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Bring one workflow. Leave with a clear automation opportunity map.
          </h2>
        </div>
        <Link
          href="#contact"
          className="inline-flex shrink-0 items-center justify-center bg-accent-cyan px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-white"
        >
          Claim the free workflow audit
        </Link>
      </div>
    </section>
  );
}
