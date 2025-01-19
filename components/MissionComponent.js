import Image from "next/image";

export default function MissionComponent({title, text, beforeImage, afterImage}) {
    return (
        <div className="flex max-w-7xl mx-auto px-8 py-16 md:py-24 items-center flex-col-reverse md:flex-row">
        <div className="w-full pl-0 md:pr-16 md:w-1/2 items-center md:justify-normal text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>
          <div className="text-lg" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        <div className="w-full pr-0 md:pl-16 md:w-1/2 md:justify-normal pb-8 md:pb-0 gap-2 flex flex-col relative">
        <Image
            className="object-cover w-[40%] justify-self-start "
            src={beforeImage.src}
            alt={beforeImage.alt}
          />
        {/* Curved Arrow */}
        <svg
          className="absolute pointer-events-none scale-y-[-1]"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "10%", // Adjust to match position relative to `afterImage`
            left: "50%",
          }}
        >
          <path
            d="M20 180 C100 120, 140 60, 100 10"
            stroke="#000"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="6"
              refY="5"
              orient="auto"
            >
              <path d="M0 0 L10 5 L0 10 Z" fill="#000" />
            </marker>
          </defs>
        </svg>
          
          <Image
            className="object-cover w-[80%] self-end"
            src={afterImage.src}
            alt={afterImage.alt}
            
          />
        </div>
      </div>
    )
}