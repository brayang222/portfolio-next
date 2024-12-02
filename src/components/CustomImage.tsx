import Image from "next/image";
import React from "react";

export const CustomImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={90}
      height={50}
      className="object-contain"
    />
  );
};
