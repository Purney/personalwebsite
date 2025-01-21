import ContactForm from "./ContactForm";
import ImageComponent from "./ImageComponent";
import ImageWithTextComponent from "./ImageWithTextComponent";
import MissionComponent from "./MissionComponent";
import PortfolioGrid from "./PortfolioGrid";
import ShowcaseComponent from "./ShowcaseComponent";
import TechnicalOverviewComponent from "./TechnicalOverviewComponent";
import TestimonalComponent from "./TestimonalComponent";
import TextComponent from "./TextComponent";

export default function ComponentFactory({ type, content }) {
  switch (type) {
    case "text":
      return <TextComponent {...content} />;
    case "image":
      return <ImageComponent {...content} />;
    case "image-with-text":
      return <ImageWithTextComponent {...content} />;
    case "showcase":
      return <ShowcaseComponent {...content} />;
    case "testimonal":
      return <TestimonalComponent {...content} />;
    case "porfolio":
      return <PortfolioGrid {...content} />;
    case "contact":
      return <ContactForm {...content} />
    case "technical-overview":
      return <TechnicalOverviewComponent {...content} />
    case "mission":
      return <MissionComponent {...content} />

    default:
      return <></>;
  }
}
