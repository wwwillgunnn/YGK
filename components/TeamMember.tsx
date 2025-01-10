import Image from "next/image";

type TeamMember = {
    src: string;
    alt: string;
    name: string;
};

export default function TeamMember({src, alt, name}: TeamMember) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <Image 
        src={src} 
        alt={alt} 
        width={350} 
        height={400} 
      />
      <figcaption>
        <p className="lg:text-xl">{name}</p>
      </figcaption>
    </figure>
  )
}
