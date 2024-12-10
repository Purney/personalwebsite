import PrimaryButton from "./PrimaryButton";

export default function Hero({ title, description, buttonLink, buttonText }) {
  return (
    <section className="pb-8 md:py-24 justify-items-center">
      <div className="max-w-7xl bg-gray-200 py-16 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{title}</h1>
        <p className="text-lg">{description}</p>
        <PrimaryButton buttonLink={buttonLink} buttonText={buttonText} />
      </div>
    </section>
  );
}
