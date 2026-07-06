const consultationUrl = "https://calendly.com/hello-william-purnell/initial-call";

export default function CTASection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-8">
        <div className="max-w-2xl">
          <p className="text-kicker">
            Next step
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Bring one workflow. Leave with a clear automation opportunity map.
          </h2>
        </div>
        <a
          href={consultationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0"
        >
          Find My Automation Opportunities
        </a>
      </div>
    </section>
  );
}
