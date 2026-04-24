import Link from "next/link";

export default function PrimaryButton({
  buttonLink,
  buttonText,
  onClick,
  className = "inline-flex items-center justify-center bg-accent-cyan px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background-dark",
}) {
  return (
    <Link href={buttonLink} className={className} onClick={onClick}>
      {buttonText}
    </Link>
  );
}
