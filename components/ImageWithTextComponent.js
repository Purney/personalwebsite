import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import FadeInAndOutWrapper from "./AnimationWrappers/FadeInAndOutWrapper";

export default function ImageWithTextComponent({
  image,
  title,
  text,
  buttonLink,
  buttonText,
  format = "text-right",
}) {
  switch (format) {
    case "text-left":
      return (
        <FadeInAndOutWrapper className="flex max-w-7xl mx-auto px-8 py-16 md:py-16 items-center flex-col-reverse md:flex-row">
          <div className="w-full pl-0 md:pr-16 md:w-1/2 items-center md:justify-normal text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>
            <div className="text-lg" dangerouslySetInnerHTML={{ __html: text }} />
            {buttonLink && buttonText && (
              <PrimaryButton buttonLink={buttonLink} buttonText={buttonText} />
            )}
          </div>
          <div className="w-full pr-0 md:pl-16 md:w-1/2 items-center md:justify-normal pb-8 md:pb-0">
            <Image
              className="object-cover w-full"
              src={image.src}
              alt={image.alt}
            />
          </div>
        </FadeInAndOutWrapper>
      );

    case "text-right":
      return (
        <FadeInAndOutWrapper className="flex max-w-7xl mx-auto px-8 py-16 md:py-16 items-center flex-col md:flex-row">
          <div className="w-full pr-0 md:pr-16 md:w-1/2 items-center md:justify-normal pb-8 md:pb-0">
            <Image
              className="object-cover w-full"
              src={image.src}
              alt={image.alt}
            />
          </div>
          <div className="w-full pl-0 md:pl-16 md:w-1/2 items-center md:justify-normal text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>
            <div className="text-lg" dangerouslySetInnerHTML={{ __html: text }} />
            {buttonLink && buttonText && (
              <PrimaryButton buttonLink={buttonLink} buttonText={buttonText}  />
            )}
          </div>
        </FadeInAndOutWrapper>
      );

    default:
      return <></>;
  }
}
