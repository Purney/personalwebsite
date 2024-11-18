import Link from 'next/link';

export default function PrimaryButton({buttonLink, buttonText}) {
    return (
        <Link href={buttonLink} className="mt-6 inline-block bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300">
          {buttonText}
        </Link>
    )
}