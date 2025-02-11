"use client";
import { PROJECTS } from "@/constants/projects";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { About } from "./About";
import { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";
import { Banner } from "./Banner";

export const Body = () => {
  const t = useTranslations("projects");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile === null) return <div className="h-screen w-screen bg-black-custom" />;

  return (
    <main className="flex flex-col w-full h-full bg-black-custom z-10">
      <Banner />
      <About />
      <section className="w-full py-5 px-24 pb-10 gap-8 lg:columns-2 xl:columns-3 min-h-svh ">
        {PROJECTS.map((project) => (
          <figure
            className="flex flex-col font-geistSans text-sm h-full mb-8 gap-0.5 break-inside-avoid"
            key={project.path}
          >
            <Link href={`/${project.path}`} className="flex justify-center">
              <Image
                className="cursor-pointer object-cover max-h-[800px]"
                src={isMobile ? project.images[0].img : project.imagePath}
                alt={t(project.description)}
                isZoomed
              />
            </Link>
            <figcaption>
              <h3 className="text-white">{t(project.name).toUpperCase()}</h3>
              <p className="text-white-opacity">{t(project.description)}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
};
