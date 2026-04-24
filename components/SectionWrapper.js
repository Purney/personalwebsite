export default function SectionWrapper({
  children,
  eyebrow,
  title,
  description,
  className = "",
  contentClassName = "",
  id,
  titleAs = "h2",
}) {
  const TitleTag = titleAs === "h1" ? "h1" : "h2";

  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-28 ${className}`}>
      <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${contentClassName}`}>
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
                {eyebrow}
              </p>
            )}
            {title && (
              <TitleTag className="text-3xl font-semibold text-white md:text-5xl">
                {title}
              </TitleTag>
            )}
            {description && (
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
