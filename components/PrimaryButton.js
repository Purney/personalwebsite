import Link from "next/link";

export default function PrimaryButton({
  buttonLink,
  buttonText,
  onClick,
  className = "mt-8 inline-block bg-black text-white py-3 px-5 rounded-sm uppercase text-xs hover:bg-gray-700",
}) {
  return (
    <Link href={buttonLink} className={className} onClick={onClick}>
      {buttonText}
    </Link>
  );
}
