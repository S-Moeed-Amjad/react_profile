import {
  frontend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  postgresql,
  graphql,
  nyeusi,
  pizza,
  nishatLogo,
  cityWalker,
  master,
  events,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native",
    icon: frontend,
  },
  {
    title: "React JS",
    icon: frontend,
  },
  {
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "Typescript",
    icon: typescript,
  },
  {
    title: "Theme Designs",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
  {
    title: "Agile Software Development",
    icon: prototyping,
  },
  {
    title: "CI/CD",
    icon: frontend,
  },
];

const technologies = [
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Techverx",
    icon: reactjs,
    iconBg: "#333333",
    date: "Jun 2022 - Sep 2022",
  },
  {
    title: "Associate Software Engineer",
    company_name: "Techverx",
    icon: reactjs,
    iconBg: "#333333",
    date: "Sep 2022 - Jun 2023",
  },
  {
    title: "Software Engineer",
    company_name: "Techverx",
    icon: reactjs,
    iconBg: "#333333",
    date: "Jun 2023 - Feb 2025",
  },
];

const projects = [
  {
    id: "project-1",
    name: "City Walker",
    description:
      "Personal project built as a course assessment. The application allows the user to explore the city and provide information about nearby events taking place.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "redux saga",
        color: "green-text-gradient",
      },
      {
        name: "react native reanimatted",
        color: "pink-text-gradient",
      },
    ],
    image: cityWalker,
    repo: "",
    demo: "https://play.google.com/store/apps/details?id=com.nishat.hotel",
  },
  {
    id: "project-2",
    name: "WLA",
    description:
      "This is a food application, where you can customise your meal and add different sides of your choice. There are two types of order in the application. One is pickup and the other one is delivery.The application is based on a SaaS model, we change themes according to client’s requirement but the business logic remains same.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit query",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    repo: "https://github.com/Mujtaba-rajput",
    demo: "https://app.myway.techverxcloud.com/",
  },
  {
    id: "project-4",
    name: "Master Your Medics",
    description: `Master Your Medics is your go-to resource to become a better Paramedic/EMT student by making the learning easier. No more being overwhelmed.No more waiting years before you escape the textbooks.`,
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "redux saga",
        color: "green-text-gradient",
      },
      {
        name: "react native web view",
        color: "pink-text-gradient",
      },
    ],
    image: master,
    repo: "https://github.com/Mujtaba-rajput",
    demo: "https://play.google.com/store/apps/details?id=com.masteryourmedics",
  },
  {
    id: "project-5",
    name: "Memorease",
    description:
      "Memorease is a platform that allows users to create and manage his life events e.g Birthday, Anniversaries etc.You can add your friends, the notification is send to their profiles for the newly created events.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "redux saga",
        color: "green-text-gradient",
      },
      {
        name: "react native push notifications",
        color: "pink-text-gradient",
      },
    ],
    image: events,
    repo: "https://github.com/Mujtaba-rajput",
  },
];

export { services, technologies, experiences, projects };
