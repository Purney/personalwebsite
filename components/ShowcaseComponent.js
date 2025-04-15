import PrimaryButton from "./PrimaryButton";
import FadeInAndOutWrapper from "./AnimationWrappers/FadeInAndOutWrapper";


export default function ShowcaseComponent({
  title,
  text,
  buttonText,
  buttonLink,
  services,
}) {
  return (
    <FadeInAndOutWrapper className="flex gap-8 max-w-7xl mx-auto px-8 py-16 md:py-16 items-center flex-col md:flex-row">
      <div className="w-full md:w-1/2 md:pr-8 pr-0">
        <div className="md:pl-16 pl-0">
          <h2 className="text-3xl md:text-2xl font-bold mb-4 md:text-left text-center">{title}</h2>
          {text && (
            <p className="text-sm" dangerouslySetInnerHTML={{ __html: text }} />
          )}
          {buttonLink && buttonText && (
            <PrimaryButton
              buttonLink={buttonLink}
              buttonText={buttonText}
              c
            />
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-8 pl-0 ">
        <div className="flex flex-col">
          {services.length > 0 && services.map((service, index) => (
            <div key={index} className="flex my-4 gap-8 even:flex-row-reverse md:even:flex-row">
              <div className="flex items-center">{service.icon}</div>
              <div className="text-left">
                <h3 className="text-xl font-semibold  mb-2">
                  {service.title}
                </h3>
                <p className="">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeInAndOutWrapper>
  );
}
