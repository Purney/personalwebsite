import PrimaryButton from "./PrimaryButton";

export default function Hero({ title, description, buttonLink, buttonText }) {
  return (
    <section className="bg-dark-section text-cta-text justify-items-center">
      <div className="max-w-7xl bg-dark-section text-cta-text py-16 md:py-72 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 max-w-screen-lg">{title}</h1>
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: description }} />
        {buttonLink && buttonText && (
          <PrimaryButton buttonLink={buttonLink} buttonText={buttonText} />
        )}
      </div>
    </section>
  );
}
