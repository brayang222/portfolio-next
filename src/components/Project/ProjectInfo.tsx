import { Project } from "@/types/Projects";
import { useTranslations } from "next-intl";

export const ProjectInfo = ({ project }: { project: Project }) => {
  const t = useTranslations("projects");

  return (
    <div className="flex w-full justify-between flex-wrap gap-4 items-start">
      <ul className="flex 2xl:gap-52 xl:gap-32 gap-24 w-full lg:w-auto">
        <li className="w-full">
          <h3 className="text-sm font-bold text-white-opacity">ROLE</h3>
          <p className="text-md">{t(project?.role)}</p>
        </li>
        <li className="w-full">
          <h3 className="text-sm font-bold text-white-opacity">
            COLLABORATORS
          </h3>
          <div className="flex flex-col">
            {project?.collaborators?.map((collaborator, index) => (
              <p key={index} className="text-md text-nowrap">
                {collaborator}
              </p>
            ))}
          </div>
        </li>
      </ul>
      <ul className="flex 2xl:gap-52 xl:gap-32 gap-24 w-full lg:w-auto lg:justify-end">
        <li className="w-full">
          <h3 className="text-sm font-bold text-white-opacity">DURATION</h3>
          <p className="text-md">{t(project?.duration)}</p>
        </li>
        <li className="w-full">
          <h3 className="text-sm font-bold text-white-opacity">TOOLS</h3>
          <div className="flex flex-col">
            {project?.tools?.map((tool, index) => (
              <p key={index} className="text-md">
                {tool}
              </p>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};
