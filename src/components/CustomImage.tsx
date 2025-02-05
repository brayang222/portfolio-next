import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

export const CustomImage = ({ src, alt }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={90}
      height={50}
      className="object-contain max-h-screen"
    />
  );
};
