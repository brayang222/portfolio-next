"use client";

import { PROJECTS } from "@/constants/projects";
import { animatePageIn } from "@/utils/animation";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const tPortfolio = useTranslations("page-animation");
  const t = useTranslations("projects");

  const pathSlice = path.split("/");
  const project = PROJECTS.find((p) => p.path === pathSlice[2]);

  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <section className="flex text-center items-center justify-center bg-black-custom">
      <div
        id="curved-banner"
        className="h-[calc(100vh+200px)] bg-black-custom fixed top-0 left-0 w-full rounded-b-[30%] z-30"
      >
        <h1
          id="banner-text"
          className="text-white text-5xl font-extrabold z-30 absolute top-[45vh] left-1/2 transform -translate-x-1/2 uppercase tracking-widest"
        >
          {project ? t(project.name) : tPortfolio("title")}
        </h1>
      </div>
      {children}
    </section>
  );
}
