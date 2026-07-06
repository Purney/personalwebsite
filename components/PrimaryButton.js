import Link from "next/link";

export default function PrimaryButton({
  buttonLink,
  buttonText,
  onClick,
  target,
  rel,
  className = "btn-primary",
}) {
  return (
    <Link href={buttonLink} className={className} onClick={onClick} target={target} rel={rel}>
      {buttonText}
    </Link>
  );
}
