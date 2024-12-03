import { Link } from "@/i18n/routing";
import { CustomImage } from "../../../components/CustomImage";
import { PROJECTS } from "@/constants/projects";
import { useTranslations } from "next-intl";

const ProjectsDetails = ({
  params,
}: {
  params: { lang: string; project: string };
}) => {
  const { lang, project: projectPath } = params;

  const project = PROJECTS.find((p) => p.path === projectPath);
  if (!project) {
    throw new Error("Project not found");
  }
  const t = useTranslations("projects");

  return (
    <main className="mt-12 bg-black-custom text-white py-8 lg:px-12 md:px-4 flex flex-col w-full h-full">
      <CustomImage src={project!.images[0].img} alt={project!.description} />
      <section className="mt-10 flex flex-col md:flex-row 2xl:gap-64 md:gap-32 gap-12 px-8 md:px-0 text-start">
        <aside className=" md:sticky top-20 h-fit flex-shrink-0">
          <h3 className="font-silkscreen text-5xl">{project?.name}</h3>
          <p className="text-white-opacity text-xs">
            {t(project?.description)}
          </p>
        </aside>
        <article className="flex flex-col gap-8">
          <p className="text-white md:columns-2 ">{t(project?.paragraph)}</p>
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
                <h3 className="text-sm font-bold text-white-opacity">
                  DURATION
                </h3>
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
          <section className="flex gap-5 justify-between columns-2 ">
            {project?.website !== "" ? (
              <Link
                href={project!.website}
                className="cursor-pointer w-full bg-[#1d1d1d] p-4 text-left rounded font-extralight"
                target="_blank"
                rel="noopener noreferrer"
              >
                MAIN WEBSITE
              </Link>
            ) : null}
            {project?.code !== "" ? (
              <Link
                href={project!.code}
                className="cursor-pointer w-full bg-[#1d1d1d] p-4 text-left rounded font-extralight"
                target="_blank"
                rel="noopener noreferrer"
              >
                CODE
              </Link>
            ) : null}
          </section>
          <section className="flex flex-col gap-10">
            {project?.images?.map((image, index) => (
              <figure className="flex flex-col gap-2" key={index}>
                <CustomImage src={image!.img} alt={image!.text} />
                <figcaption className="opacity-60">
                  {t(`${image!.text}.${index}`)}
                </figcaption>
              </figure>
            ))}
          </section>
        </article>
      </section>
    </main>
  );
};

export default ProjectsDetails;
