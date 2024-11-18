export default function ImageWithTextComponent({ image, text, format }) {
  switch (format) {
    case "text-left":
      return (
        <div className="flex gap-x-4">
          <div className="w-1/2">
            <p>{text}</p>
          </div>
          <div className="w-1/2">
            <Image {...image} />
          </div>
        </div>
      );

    case "text-right":
      return (
        <div className="flex gap-x-4">
          <div className="w-1/2">
            <Image {...image} />
          </div>
          <div className="w-1/2">
            <p>{text}</p>
          </div>
        </div>
      );

    default:
      return (<></>)
  }
}
