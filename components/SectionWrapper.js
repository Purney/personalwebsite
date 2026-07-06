export default function SectionWrapper({
  children,
  eyebrow,
  title,
  description,
  className = "",
  contentClassName = "",
  headerAlign = "left",
  id,
  titleAs = "h2",
}) {
  const TitleTag = titleAs === "h1" ? "h1" : "h2";
  const headerAlignmentClass =
    headerAlign === "center"
      ? "mx-auto text-center"
      : headerAlign === "right"
        ? "ml-auto text-left lg:text-right"
        : "";
  const descriptionAlignmentClass =
    headerAlign === "center"
      ? "mx-auto"
      : headerAlign === "right"
        ? "lg:ml-auto"
        : "";

  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-28 ${className}`}>
      <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${contentClassName}`}>
        {(eyebrow || title || description) && (
          <div className={`mb-12 max-w-3xl ${headerAlignmentClass}`}>
            {eyebrow && (
              <p className="mb-3 text-kicker">
                {eyebrow}
              </p>
            )}
            {title && (
              <TitleTag className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                {title}
              </TitleTag>
            )}
            {description && (
              <p className={`mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg ${descriptionAlignmentClass}`}>
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
