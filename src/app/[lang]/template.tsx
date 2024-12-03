"use client";

import { PROJECTS } from "@/constants/projects";
import { animatePageIn } from "@/utils/animation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const pathSlice = path.split("/");

  const project = PROJECTS.find((p) => p.path === pathSlice[2]);
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <section className="flex text-center items-center justify-center">
      <div
        id="curved-banner"
        className="h-[calc(100vh+200px)] bg-black-custom fixed top-0 left-0 w-full rounded-b-[30%] z-20"
      >
        <h1
          id="banner-text"
          className="text-white text-2xl font-extrabold z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {project ? project!.name : "Portafolio"}
        </h1>
      </div>
      {children}
    </section>
  );
}
