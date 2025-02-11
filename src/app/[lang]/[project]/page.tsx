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

  const projectKey = projectPath as keyof typeof messages.projects;
  const title = messages.projects?.[projectKey]?.name || "Proyecto no encontrado";
  const description = messages.projects?.[projectKey]?.description || "Sin descripción";

  return {
    title: `Detalles del proyecto - ${title}`,
    description: `Descubre cómo desarrollé ${title}, un proyecto destacado en mi portafolio, ${description || 'innovaciones tecnológicas'} A través de este proyecto, demuestro mis habilidades en ${project?.tools || 'desarrollo web y diseño'}.`,
    openGraph: {
      title: `Detalles del proyecto - ${title}`,
      description: `Explora los detalles del proyecto ${title} en mi portafolio, ${description} utilizando tecnologías como ${project?.tools || 'React, Node.js, etc.'}.`,
      url: `https://brayangomez.xyz/es/${project?.path}`,
      images: [
        {
          url: project?.imagePath ? project.imagePath : "/portafolio-og.webp", 
          width: 1200,
          height: 630,
          alt: `Detalles de ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Detalles del proyecto - ${title}`,
      description: `Conoce más sobre el proyecto ${title}, que involucra ${description || 'soluciones innovadoras en tecnología'}.`,
      images: [
        {
          url: project?.imagePath ? project.imagePath : "/portafolio-og.webp", 
          alt: `Detalles de ${title}`,
        },
      ],
    },
  };
}


const Page = async ({ params }: { params: Params }) => {
  const { project: projectPath } = await params;

  return <ProjectView projectPath={projectPath} />;
};

export default Page;
