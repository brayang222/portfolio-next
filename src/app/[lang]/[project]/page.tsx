"use server";

import { ProjectView } from "@/components/Project/ProjectView";

type Params = Promise<{
  project: string;
}>;

const Page = async ({ params }: { params: Params }) => {
  const { project: projectPath } = await params;

  return <ProjectView projectPath={projectPath} />;
};

export default Page;
