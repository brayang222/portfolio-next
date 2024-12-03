"use server";

import { ProjectDetails } from "@/components/ProjectDetails";

type Params = Promise<{
  project: string;
}>;

const Page = async ({ params }: { params: Params }) => {
  const { project: projectPath } = await params;

  return <ProjectDetails projectPath={projectPath} />;
};

export default Page;
