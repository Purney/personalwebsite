import Image from "next/image";

export default function ImageComponent({
    url,
    src,
    alt = "",
    className,
    width,
    height,
    sizes = "100vw",
    priority = false,
}) {
    const imageSrc = src || url;

    if (!imageSrc) {
        return null;
    }

    if (width && height) {
        return (
            <Image
                src={imageSrc}
                alt={alt}
                width={width}
                height={height}
                sizes={sizes}
                priority={priority}
                className={className}
            />
        );
    }

    return (
        <span className={`relative block ${className || ""}`}>
            <Image
                src={imageSrc}
                alt={alt}
                fill
                sizes={sizes}
                priority={priority}
                className="object-cover"
            />
        </span>
    );
}
