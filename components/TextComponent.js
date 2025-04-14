export default function TextComponent({ html }) {
  return (
    <>
      <div className="leading-relaxed" dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
}
