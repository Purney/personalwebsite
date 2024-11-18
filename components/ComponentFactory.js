import ImageComponent from "./ImageComponent";
import TextComponent from "./TextComponent";

export default function ComponentFactory({ type, content }) {
  switch (type) {
    case "text":
      return <TextComponent {...content} />;
    case "image":
      return <ImageComponent {...content} />;
    case "image-with-text":

    default:
      return <></>;
  }
}
