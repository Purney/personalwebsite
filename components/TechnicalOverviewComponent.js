import Image from "next/image";

export default function TechnicalOverviewComponent({ title, text, images }) {
  return (
    <section className="bg-dark-section text-cta-text justify-items-center">
      <div className="max-w-7xl bg-dark-section text-cta-text py-16 md:py-16 px-8 flex flex-col">
        <div className="text-center pb-8">
          <h3 className="text-4xl md:text-6xl pb-4 font-bold ">{title}</h3>
          <p>{text}</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-28 gap-8 items-center">
          {images.map((image, index) => (
            <div key={"technical-overview-" + index}>
              <Image
                className="object-cover w-full"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
