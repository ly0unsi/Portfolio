import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>laravel </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Restfull API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Graphic Design",
    about:
      "I can do infographics using <b>illustrator</b>",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Vue.js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Microsoft Office",
    level: "90",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Crypto dashboard",
    description:
      "This app shows a statistical view about Cryptocurrencies",
    image_path: "/images/crypto dash -react.jpg",
    deployed_url: "https://crypt0dash.netlify.app",
    github_url: "https://github.com/ly0unsi/cryptoDash",
    category: ["react"],
    key_techs: ["React", "Chart.js",'restfullApi'],
  },
  {
    id: 2,
    name: "Inventory App",
    image_path: "/images/inventory app -laravel.jpg",
    deployed_url: "unvailable",
    github_url: "https://github.com/ly0unsi/ly0unsi-Inventoy-App-Laravel-Vue",
    category: ["laravel","vue"],
    description:
      "An web app helps managing your stocks ,employees/ers ,suppliers ... ",
    key_techs: ["Vue.js", "Laravel", "Framer Motion"],
  },

  {
    id: 3,
    name: "Memories App",
    image_path: "/images/memories app - mern.jpg",
    deployed_url: "https://jijou.net",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "react"],
    description:
      "Social Media app for people who can share memories,create posts,like them,etc...",
    key_techs: [
      "React",
      "MongoDb",
      "express",
      "Node.js",
    ],
  },

  {
    id: 4,
    name: "Realtime Chat App",
    image_path: "/images/shatApp - mern - stream.jpg",
    deployed_url: "https://shatapp.netlify.app/",
    github_url: "https://github.com/ly0unsi/chatApp",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "mongoDb", "Express", "Stream.Io"],
  },

  {
    id: 5,
    name: "social Blogging App",
    image_path: "/images/social m app -django.jpg",
    deployed_url: "https://readose.com",
    github_url: "https://github.com/ly0unsi/Advanced-Blog-Django",
    category: ["django"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["JQuery", "Django", "Boottrap"],
  },

  {
    id: 6,
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["laravel"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["laravel", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 7,
    name: "Ecommerce App ",
    image_path: "/images/ecommerce app -laravel.jpg",
    deployed_url: "unvailable",
    github_url: "https://github.com/ly0unsi/ecommerce-app-Laravel",
    category: ["laravel"],
    description:
      'Full ecommerce app where can you shop ur favourite products safely ',
    key_techs: [
      "laravel",
      "stripe",
      "jquery",
      "Bootstrap",
    ],
  },
  {
    id: 8,
    name: "Forum App",
    image_path: "/images/forum app-laravel.jpg",
    deployed_url: "unvailable",
    github_url: "https://github.com/ly0unsi/Forum-laravel",
    category: ["laravel"],
    description:
      "Stackoverflow clone Q&A ",
    key_techs: ["laravel", "jquery", "Bootstrap"],
  },
];
