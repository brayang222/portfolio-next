import { PROJECTS } from "@/constants/projects";
import { Metadata } from "next";

export async function generateMetadata({
  projectPath,
}: {
  projectPath: string;
}): Promise<Metadata> {
  // Busca el proyecto correspondiente en el arreglo de proyectos
  const project = PROJECTS.find((p) => p.path === projectPath);

  // Si el proyecto no se encuentra, retorna los valores por defecto
  if (!project) {
    return {
      title: "ABC CINEMATOGRAPHY",
      description: "abc colombian cinematography",
      openGraph: {
        title: "ABC CINEMATOGRAPHY",
        description: "abc colombian cinematography",
        images: ["/assets/default-image.webp"], // Imagen por defecto si no hay proyecto
      },
      twitter: {
        title: "ABC CINEMATOGRAPHY",
        description: "abc colombian cinematography",
        images: ["/assets/default-image.webp"], // Imagen por defecto si no hay proyecto
      },
    };
  }

  // Si el proyecto se encuentra, devuelve los metadatos correspondientes
  return {
    title: project?.name || "ABC CINEMATOGRAPHY",
    description: project?.description || "abc colombian cinematography",
    openGraph: {
      title: project?.name || "ABC CINEMATOGRAPHY",
      description: project?.description || "abc colombian cinematography",
      images: [project?.imagePath || "/assets/default-image.webp"], // Usa la imagen del proyecto
    },
    twitter: {
      title: project?.name || "ABC CINEMATOGRAPHY",
      description: project?.description || "abc colombian cinematography",
      images: [project?.imagePath || "/assets/default-image.webp"], // Usa la imagen del proyecto
    },
  };
}
