import Link from "next/link";

export default function Breadcrumbs({ items, className = "" }) {
  if (!items?.length) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={`${item.href}-${item.label}`} className="flex items-center gap-2">
            {index > 0 && <span className="text-slate-600">/</span>}
            {isLast ? (
              <span className="text-slate-200">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-accent-amber transition hover:text-white hover:underline"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
