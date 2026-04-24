import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block h-full overflow-hidden border border-white/10 bg-white/[0.04] transition hover:border-accent-cyan/60 hover:bg-white/[0.07]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.category?.slice(0, 2).map((category) => (
            <span
              key={category}
              className="border border-white/10 px-2 py-1 text-xs uppercase tracking-[0.14em] text-slate-300"
            >
              {category}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
}
