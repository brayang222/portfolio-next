import { Project } from "@/types/Projects";

export const PROJECTS: Project[] = [
  {
    imagePath: "/assets/ee/header.webp",
    path: `estilo-elite`,
    name: "ESTILO ÉLITE",
    description: "estilo-elite.description",
    paragraph: "estilo-elite.paragraph",
    role: "estilo-elite.role",
    collaborators: ["Brayan Vargas"],
    duration: "estilo-elite.duration",
    tools: ["React", "Tailwind"],
    website: "https://estiloelite.netlify.app/",
    code: "https://github.com/brayang222/EstiloEliteReact.git",
    images: [
      { img: "/assets/ee/header.webp", text: "estilo-elite.images" },
      { img: "/assets/ee/filter.webp", text: "estilo-elite.images" },
      { img: "/assets/ee/social.webp", text: "estilo-elite.images" },
      { img: "/assets/ee/wpp.webp", text: "estilo-elite.images" },
    ],
  },
  {
    imagePath: "/assets/blooma/blooma-phone.webp",
    path: "blooma",
    name: "BLOOMA",
    description: "blooma.description",
    paragraph: "blooma.paragraph",
    role: "blooma.role",
    collaborators: [
      "Brayan Vargas",
      "Andres Velez",
      "Diego Rojas",
      "Alejadro montaña",
    ],
    duration: "blooma.duration",
    tools: ["Next JS", "React", "TypeScript", "Tailwind", "Java", "AWS"],
    website: "https://app-qa.blooma.io/es/employee/my-wallet",
    code: "",
    images: [
      { img: "/assets/blooma/dashboard.webp", text: "blooma.images" },
      { img: "/assets/blooma/storage.webp", text: "blooma.images" },
      { img: "/assets/blooma/files-gestion.webp", text: "blooma.images" },
      {
        img: "/assets/blooma/organization-members.webp",
        text: "blooma.images",
      },
      { img: "/assets/blooma/service-type.webp", text: "blooma.images" },
      { img: "/assets/blooma/order-details.webp", text: "blooma.images" },
      { img: "/assets/blooma/chat.webp", text: "blooma.images" },
      { img: "/assets/blooma/credits-pricing.webp", text: "blooma.images" },
    ],
  },
  {
    imagePath: "/assets/rh/header.webp",
    path: "hojarasca",
    name: "HOJARASCA",
    description: "hojarasca.description",
    paragraph: "hojarasca.paragraph",
    role: "hojarasca.role",
    collaborators: ["Brayan Vargas"],
    duration: "hojarasca.duration",
    tools: ["PHP", "JavaScript", "MySql", "HTML", "CSS", "Bootstrap"],
    website: "",
    code: "https://github.com/brayang222/restaurant-hojarasca.git",
    images: [
      { img: "/assets/rh/header.webp", text: "hojarasca.images" },
      { img: "/assets/rh/content.webp", text: "hojarasca.images" },
      { img: "/assets/rh/platillos.webp", text: "hojarasca.images" },
    ],
  },

  {
    imagePath: "/assets/nasa.webp",
    path: "nasa-date",
    name: "NASA DATE",
    description: "nasa.description",
    paragraph: "nasa.paragraph",
    role: "nasa.role",
    collaborators: ["Brayan Vargas"],
    duration: "nasa.duration",
    tools: ["JavaScript", "API NASA", "HTML", "CSS"],
    website: "https://astropicturee.netlify.app/",
    code: "https://github.com/brayang222/astronomy-picture",
    images: [{ img: "/assets/nasa.webp", text: "nasa.images" }],
  },
  {
    imagePath: "/assets/plain-portfolio/header-portfolio.webp",
    path: "portfolio",
    name: "PORTFOLIO",
    description: "portfolio.description",
    paragraph: "portfolio.paragraph",
    role: "portfolio.role",
    collaborators: ["Brayan Vargas"],
    duration: "portfolio.duration",
    tools: ["HTML", "CSS", "JavaScript"],
    website: "https://portfoliobra.netlify.app/",
    code: "https://portfoliobra.netlify.app/",
    images: [
      {
        img: "/assets/plain-portfolio/header-portfolio.webp",
        text: "portfolio.images",
      },
      {
        img: "/assets/plain-portfolio/projects.webp",
        text: "portfolio.images",
      },
    ],
  },
  {
    imagePath: "/assets/todo.webp",
    path: "todo",
    name: "TODO APP",
    description: "todo.description",
    paragraph: "todo.paragraph",
    role: "todo.role",
    collaborators: ["Brayan Vargas"],
    duration: "todo.duration",
    tools: ["React", "JavaScript"],
    website: "https://listas-tareas.netlify.app/",
    code: "https://github.com/brayang222/lista-tareas",
    images: [
      {
        img: "/assets/todo.webp",
        text: "todo.images",
      },
    ],
  },
  {
    imagePath: "/assets/triki.webp",
    path: "triki",
    name: "TRIKI GAME",
    description: "triki.description",
    paragraph: "triki.paragraph",
    role: "triki.role",
    collaborators: ["Brayan Vargas"],
    duration: "triki.duration",
    tools: ["React", "JavaScript"],
    website: "https://trikigame.netlify.app/",
    code: "https://github.com/brayang222/tic-tac-toe",
    images: [
      {
        img: "/assets/triki.webp",
        text: "triki.images",
      },
    ],
  },
  {
    imagePath: "/assets/white-car/login.webp",
    path: "white-car",
    name: "WHITE CAR",
    description: "white-car.description",
    paragraph: "white-car.paragraph",
    role: "white-car.role",
    collaborators: ["Brayan Vargas", "Felipe Velez"],
    duration: "white-car.duration",
    tools: [
      "FlutterFlow",
      "Flutter",
      "Dart",
      "Firebase",
      "Google routes, matrix API",
    ],
    website: "https://whitecar.com.co/",
    code: "",
    images: [
      { img: "/assets/white-car/header-app.webp", text: "white-car.images" },
      { img: "/assets/white-car/header-app.webp", text: "white-car.images" },
    ],
  },
];
