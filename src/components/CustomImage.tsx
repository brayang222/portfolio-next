import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export const CustomImage = ({ src, alt }: Props) => {
  return (
    <div className="relative w-full aspect-[90/50] max-h-screen">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 80vw, 100vw"
        className="object-contain"
      />
    </div>
  );
};
