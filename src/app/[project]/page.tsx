"use server";
import Link from "next/link";
import { CustomImage } from "../components/CustomImage";
import { PROJECTS } from "../constants/projects";

const ProjectsDetails = async ({
  params,
}: {
  params: Promise<{ project: string }>;
}) => {
  const { project: projectPath } = await params;

  const project = PROJECTS.find((p) => p.path === projectPath);
  return (
    <main className="mt-12 bg-black-custom text-white py-8 lg:px-12 md:px-4 flex flex-col w-full h-full">
      <CustomImage src={project!.images[0].img} alt={project!.description} />
      <section className="mt-10 md:flex md:flex-row 2xl:gap-64 md:gap-32 gap-12 px-8 md:px-0">
        <aside className=" md:sticky top-20 h-fit flex-shrink-0">
          <h3 className="font-silkscreen text-5xl">{project?.name}</h3>
          <p className="text-white-opacity text-xs">{project?.description}</p>
        </aside>
        <article className="flex flex-col gap-8">
          <p className="text-white md:columns-2 ">{project?.paragraph}</p>
          <div className="*flex lg:justify-between lg:columns-2">
            <ul className="flex xl:gap-52 gap-24 ">
              <li>
                <h3 className="text-sm font-bold text-white-opacity">ROLE</h3>
                <p className="text-md">{project?.role}</p>
              </li>
              <li>
                <h3 className="text-sm font-bold text-white-opacity">
                  COLLABORATORS
                </h3>
                <div className="flex flex-col">
                  {project?.collaborators?.map((collaborator, index) => (
                    <p key={index} className="text-md">
                      {collaborator}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
            <ul className="flex 2xl:gap-52 xl:gap-32 gap-24 ">
              <li>
                <h3 className="text-sm font-bold text-white-opacity">
                  DURATION
                </h3>
                <p className="text-md">que más</p>
              </li>
              <li>
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
            <Link
              href={project!.path}
              className="cursor-pointer w-full bg-[#1d1d1d] p-4 text-left rounded font-extralight"
            >
              MAIN WEBSITE
            </Link>
            <Link
              href={project!.path}
              className="cursor-pointer w-full bg-[#1d1d1d] p-4 text-left rounded font-extralight"
            >
              CODE
            </Link>
          </section>
          <section className="flex flex-col gap-10">
            {project?.images?.map((image, index) => (
              <figure className="flex flex-col gap-2" key={index}>
                <CustomImage src={image!.img} alt={image!.text} />
                <figcaption className="opacity-60">{image!.text}</figcaption>
              </figure>
            ))}
          </section>
        </article>
      </section>
    </main>
  );
};

export default ProjectsDetails;
