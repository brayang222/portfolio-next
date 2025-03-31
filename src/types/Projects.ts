export interface Project {
  imagePath: string;
  path: string;
  name: string;
  description: string;
  paragraph: string;
  role: string;
  collaborators: string[];
  duration: string;
  tools: string[];
  website: string;
  code: string;
  images: Image[];
}

export interface Image {
  img: string;
  text: string;
}

export interface About {
  about: string;
  aboutText: string;
  team: string;
  teamDetails: TeamDetail[];
  description: string;
}

export interface TeamDetail {
  id: number;
  teamName: string;
  teamTimeLine: string;
  descriptionText: string;
}
