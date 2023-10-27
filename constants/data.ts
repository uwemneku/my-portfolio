import { IconType } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";

export const stackIcons: { Icon: IconType; title: string }[] = [
  {
    Icon: AiFillHtml5,
    title: "HTML5",
  },
  {
    Icon: IoLogoJavascript,
    title: "Javascript",
  },
  {
    Icon: SiTypescript,
    title: "Typescript",
  },
  {
    Icon: FaReact,
    title: "React",
  },
  {
    Icon: FaReact,
    title: "React Native",
  },
  {
    Icon: FaNodeJs,
    title: "Node JS",
  },
];
