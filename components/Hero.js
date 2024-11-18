import PrimaryButton from "./PrimaryButton";

export default function Hero({ title, description, buttonLink, buttonText }) {
  return (
    <section className="bg-blue-900 text-white py-36 px-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg">{description}</p>
      <PrimaryButton buttonLink={buttonLink} buttonText={buttonText} />
    </section>
  );
}
