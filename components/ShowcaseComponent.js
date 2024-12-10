import PrimaryButton from "./PrimaryButton";

export default function ShowcaseComponent({
  title,
  text,
  buttonText,
  buttonLink,
  services,
}) {
  return (
    <div className="flex gap-8 max-w-7xl mx-auto px-8 py-12 items-center flex-col md:flex-row">
      <div className="w-full md:w-1/2 md:pr-8 pr-0">
        <div className="md:pl-16 pl-0">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-sm">{text}</p>
          {buttonLink && buttonText && (
            <PrimaryButton
              buttonLink={buttonLink}
              buttonText={buttonText}
              className="mt-8 inline-block text-black rounded-sm text-xs hover:underline"
            />
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-8 pl-0 ">
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div key={index} className="flex my-4 gap-8">
              <div className="flex items-center">{service.icon}</div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}