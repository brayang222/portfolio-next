"use client";

import { Link } from "@/i18n/routing";
import { PROJECTS } from "@/constants/projects";
import { toast } from "sonner";
import { ProjectDetails } from "./ProjectDetails";

export const ProjectView = ({ projectPath }: { projectPath: string }) => {
  const project = PROJECTS.find((p) => p.path === projectPath);
  if (!project) {
    toast.error("No se encuentra el proyecto");
  }
  return (
    <>
      {!project ? (
        <div className="*:mt-12 bg-black-custom text-white py-8 lg:px-12 md:px-4 flex items-center justify-center w-full h-screen">
          <Link href={"/"} className="rounded border-white">
            Volver
          </Link>
        </div>
      ) : (
        <ProjectDetails project={project} />
      )}
    </>
  );
};
