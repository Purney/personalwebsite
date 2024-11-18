import Image from "next/image";

export default function ImageComponent({url, alt, className}) {
    return (
        <Image url={url} alt={alt} className={className} />
    )
}