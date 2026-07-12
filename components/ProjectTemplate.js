import ComponentFactory from "./ComponentFactory";

export default function ProjectTemplate({ sections }) {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center">
      <main className="flex flex-col">
        {sections.map((section) => (
          <section
            id={section.name}
            key={section.name}
            className="scroll-mt-16"
          >
            <ComponentFactory type={section.type} content={section.content} />
          </section>
        ))}
      </main>
    </div>
  );
}
