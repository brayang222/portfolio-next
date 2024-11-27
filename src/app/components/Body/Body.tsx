import React from "react";
import { About } from "../About/About";
import { PROJECTS } from "@/app/constants/projects";
import Link from "next/link";

export const Body = () => {
  return (
    <div className="flex flex-col w-full h-full bg-black-custom">
      <About />
      <section className="w-full max-w-full py-5 px-24 pb-10 gap-8 columns-3 min-h-svh">
        {PROJECTS.map((project) => (
          <div
            className="flex flex-col font-geistSans text-sm h-full"
            key={project.path}
          >
            <Link href={project.path} className="flex justify-center">
              <img
                className="cursor-pointer object-contain max-h-[800px] "
                src={project.imagePath}
                alt={project.description}
              />
            </Link>
            <h3 className="text-white">{project.name}</h3>
            <p className="text-white-opacity">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
