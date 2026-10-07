"use server";

import { ProjectView } from "@/components/Project/ProjectView";
import { PROJECTS } from "@/constants/projects";
import { Metadata } from "next";
import { getLocale } from 'next-intl/server';
import messagesEn from '@messages/en.json';
import messagesEs from '@messages/es.json';

type Params = Promise<{
  project: string;
}>;

export const generateMetadata = async ({ params }: { params: Params }): Promise<Metadata> => {
  const En = messagesEn;
  const Es = messagesEs;
  const locale = await getLocale();
  const messages = locale === 'es' ? Es : En;
  
  const { project: projectPath } = await params;
  const project = PROJECTS.find((p) => p.path === projectPath);

  const isEn = locale === "en";
  const projectKey = projectPath as keyof typeof messages.projects;
  const title =
    messages.projects?.[projectKey]?.name ||
    (isEn ? "Project not found" : "Proyecto no encontrado");
  const description =
    messages.projects?.[projectKey]?.description ||
    (isEn ? "No description" : "Sin descripción");
  const tools =
    project?.tools?.join(", ") ||
    (isEn ? "web development and design" : "desarrollo web y diseño");
  const pageTitle = isEn ? `Project details - ${title}` : `Detalles del proyecto - ${title}`;
  const imageAlt = isEn ? `Details of ${title}` : `Detalles de ${title}`;

  return {
    title: pageTitle,
    description: isEn
      ? `Discover how I built ${title}, a featured project in my portfolio, ${description} Through this project, I demonstrate my skills in ${tools}.`
      : `Descubre cómo desarrollé ${title}, un proyecto destacado en mi portafolio, ${description} A través de este proyecto, demuestro mis habilidades en ${tools}.`,
    alternates: {
      canonical: `/${locale}/${projectPath}`,
      languages: {
        es: `/es/${projectPath}`,
        en: `/en/${projectPath}`,
        "x-default": `/es/${projectPath}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: isEn
        ? `Explore the details of the ${title} project in my portfolio, ${description} using technologies such as ${tools}.`
        : `Explora los detalles del proyecto ${title} en mi portafolio, ${description} utilizando tecnologías como ${tools}.`,
      url: `https://brayangomez.xyz/${locale}/${project?.path}`,
      images: [
        {
          url: project?.imagePath ? project.imagePath : "/portafolio-og.webp",
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: isEn
        ? `Learn more about the ${title} project, which involves ${description}.`
        : `Conoce más sobre el proyecto ${title}, que involucra ${description}.`,
      images: [
        {
          url: project?.imagePath ? project.imagePath : "/portafolio-og.webp",
          alt: imageAlt,
        },
      ],
    },
  };
}


const BASE_URL = "https://brayangomez.xyz";

const Page = async ({ params }: { params: Params }) => {
  const { project: projectPath } = await params;
  const locale = await getLocale();
  const messages = locale === "es" ? messagesEs : messagesEn;
  const project = PROJECTS.find((p) => p.path === projectPath);
  const projectKey = projectPath as keyof typeof messages.projects;
  const name = messages.projects?.[projectKey]?.name;
  const description = messages.projects?.[projectKey]?.description;

  const projectJsonLd = project
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name,
        description,
        image: `${BASE_URL}${project.imagePath}`,
        url: `${BASE_URL}/${locale}/${project.path}`,
        inLanguage: locale,
        keywords: project.tools.join(", "),
        creator: {
          "@type": "Person",
          name: "Brayan Gómez",
          url: BASE_URL,
        },
      }
    : null;

  return (
    <>
      {projectJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />
      )}
      <ProjectView projectPath={projectPath} />
    </>
  );
};

export default Page;
