import Link from "next/link";

export default function PrimaryButton({
  buttonLink,
  buttonText,
  onClick,
  className = "mt-8 inline-block bg-cta-button text-cta-text hover:bg-cta-hover py-3 px-5 rounded-sm uppercase text-xs",
}) {
  return (
    <Link href={buttonLink} className={className} onClick={onClick}>
      {buttonText}
    </Link>
  );
}
