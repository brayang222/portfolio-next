import { PROJECTS } from "@/constants/projects";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { About } from "./About";

export const Body = () => {
  const t = useTranslations("projects");
  return (
    <main className="flex flex-col w-full h-full bg-black-custom">
      <About />
      <section className="w-full max-w-full py-5 px-24 pb-10 gap-8 lg:columns-2 xl:columns-3 min-h-svh ">
        {PROJECTS.map((project) => (
          <figure
            className="flex flex-col font-geistSans text-sm h-full mb-8 gap-0.5 break-inside-avoid"
            key={project.path}
          >
            <Link href={`/${project.path}`} className="flex justify-center">
              <img
                className="cursor-pointer object-cover max-h-[800px] "
                src={project.imagePath}
                alt={t(project.description)}
              />
            </Link>
            <figcaption>
              <h3 className="text-white">{project.name}</h3>
              <p className="text-white-opacity">{t(project.description)}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
};
