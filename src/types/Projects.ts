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
