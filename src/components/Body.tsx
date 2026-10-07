"use client";
import { PROJECTS } from "@/constants/projects";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { About } from "./About";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { Services } from "./Services";
import Image from "next/image";
import { Project } from "@/types/Projects";

// Real pixel dimensions of each project's grid thumbnail, so next/image can
// reserve the correct aspect ratio instead of distorting or shifting layout.
// Add an entry here whenever a new project's imagePath is introduced.
const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/assets/finance/landing.webp": { width: 2940, height: 1614 },
  "/assets/estella/hero.webp": { width: 2940, height: 1600 },
  "/assets/impetu/hero.webp": { width: 2940, height: 1614 },
  "/assets/daniela-photo/hero.webp": { width: 2940, height: 1616 },
  "/assets/ee/header.webp": { width: 1869, height: 981 },
  "/assets/task-flow/landing-1.webp": { width: 1878, height: 981 },
  "/assets/abc/header.webp": { width: 1836, height: 970 },
  "/assets/proveo/productos.webp": { width: 1861, height: 982 },
  "/assets/rh/header.webp": { width: 1858, height: 979 },
  "/assets/nasa.webp": { width: 1856, height: 979 },
  "/assets/blooma/blooma-phone.webp": { width: 388, height: 846 },
  "/assets/white-car/login.webp": { width: 351, height: 765 },
};
const DEFAULT_DIMENSIONS = { width: 1600, height: 900 };

const ProjectGrid = ({
  projects,
  isMobile,
}: {
  projects: Project[];
  isMobile: boolean;
}) => {
  const t = useTranslations("projects");

  return (
    <section className="w-full py-5 px-4 md:px-24 pb-10 gap-8 lg:columns-2 xl:columns-3">
      {projects.map((project) => {
        const src = isMobile ? project.images[0].img : project.imagePath;
        const { width, height } = IMAGE_DIMENSIONS[src] ?? DEFAULT_DIMENSIONS;

        return (
          <figure
            className="flex flex-col font-geistSans text-sm h-full mb-8 gap-0.5 break-inside-avoid"
            key={project.path}
          >
            <Link
              href={`/${project.path}`}
              className="flex justify-center overflow-hidden"
            >
              <Image
                className="cursor-pointer object-cover max-h-[800px] w-full h-auto transition-transform duration-300 hover:scale-105"
                src={src}
                alt={t(project.description)}
                width={width}
                height={height}
                sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
              />
            </Link>
            <figcaption>
              <h3 className="text-white">{t(project.name).toUpperCase()}</h3>
              <p className="text-white-opacity">{t(project.description)}</p>
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
};

export const Body = () => {
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

  if (isMobile === null)
    return <div className="h-screen w-screen bg-black-custom" />;

  const orderedProjects = [
    ...PROJECTS.filter((p) => p.category === "business"),
    ...PROJECTS.filter((p) => p.category === "practice"),
  ];

  return (
    <main className="flex flex-col w-full h-full bg-black-custom z-10">
      <Banner />
      <Services />
      <About isMobile={isMobile} />
      <ProjectGrid projects={orderedProjects} isMobile={isMobile} />
    </main>
  );
};
