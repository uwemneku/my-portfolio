import React, { useRef } from "react";
import Head from "next/head";
import { motion, useViewportScroll, Variants } from "framer-motion";
import { useResponsiveBreakpoint } from "../hooks";
import profilePicture from "../public/uwem.jpg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillHtml5,
} from "react-icons/ai";
import { FaTiktok, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import Image from "next/image";
import { Project } from "../components";

export default function Home() {
  const { scrollY } = useViewportScroll();
  const mainRef = useRef<HTMLElement>(null);
  const imageSize = useResponsiveBreakpoint() === "mobile" ? 100 : 150;
  return (
    <div>
      <Head>
        <title>Uwem Israel</title>
      </Head>
      <main
        ref={mainRef}
        className="max-w-3xl ml-auto mr-auto overflow-x-hidden p-3 px-6"
      >
        <section className="">
          <motion.div
            initial={{
              scale: 2,
              translateX: 100,
              opacity: 0,
              position: "absolute",
            }}
            animate={{
              scale: 1,
              translateX: 0,
              opacity: 1,
              transitionEnd: { position: "relative" },
            }}
            transition={{ delay: 0.3, easings: ["easeInOut", "easeInOut"] }}
          >
            <Image
              src={profilePicture}
              width={imageSize}
              height={imageSize}
              objectFit="cover"
              objectPosition="center"
              alt="sss"
              className="rounded-full border-2 border-white"
            />
            <p className="font-bold text-4xl md:text-5xl text-white">
              {"Hi I'm Israel"}
            </p>
            <p className="font-semibold text-lg md:text-3xl text-white">
              A {/* <span className="underline decoration-blue-500"> */}
              Javascript Developer
              {/* </span> */}
            </p>
            <div className="text-white flex my-3 gap-3">
              <motion.div {...iconProps} custom={1}>
                <AiFillGithub size={30} className="transform hover:scale-110" />
              </motion.div>
              <motion.div {...iconProps} custom={1.5}>
                <AiFillLinkedin
                  size={30}
                  className="transform hover:scale-110"
                />
              </motion.div>
              <motion.div {...iconProps} custom={2}>
                <AiFillTwitterCircle
                  size={30}
                  className="transform hover:scale-110"
                />
              </motion.div>
              <motion.div {...iconProps} custom={3}>
                <FaTiktok size={30} className="transform hover:scale-110" />
              </motion.div>
            </div>
          </motion.div>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <p className="text-slate-300 text-sm md:text-base my-6 mb-12">
            {`I enjoys using javascript to create things in different environments
            such as automating google workspace, building web apps, and creating
            mobile applications. I enjoy making videos about what I learned for
            TikTok and when I'm not writing code am either trying to learn the
            lyrics to my new favorite song or rewatching some of my favorite
            comedy series`}
          </p>
          <div>
            <h2 className="font-semibold text-lg md:text-3xl text-white">
              Tech Stack
            </h2>
            <ul className="flex flex-wrap justify-start gap-4 text-slate-200 max-w-[500px]">
              {stackIcons.map((icon, index) => (
                <li
                  key={index}
                  className="min-w-[100px] flex flex-col flex-shrink-0 flex-grow-0 items-center rounded-md m-2 p-3 shadow-sm bg-slate-900 shadow-black hover:border-2 border-blue-600 transition-all duration-200 ease-in-out"
                >
                  {icon.icon}
                  <p className="mt-2 text-sm font-semibold">{icon.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          const top = mainRef.current?.getBoundingClientRect().top;
          return <Project {...{ index, scrollY, top }} key={item} />;
        })}
      </main>
    </div>
  );
}

const iconVariants: Variants = {
  hidden: (i) => ({
    opacity: 0,
    x: i * 50,
  }),
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.7 },
  }),
};

const iconProps = {
  initial: "hidden",
  animate: "visible",
  variants: iconVariants,
};

const stackIcons: { icon: JSX.Element; title: string }[] = [
  {
    icon: AiFillHtml5({ size: 30 }),
    title: "HTML5",
  },
  {
    icon: IoLogoJavascript({ size: 30 }),
    title: "Javascript",
  },
  {
    icon: SiTypescript({ size: 30 }),
    title: "Typescript",
  },
  {
    icon: FaReact({ size: 30 }),
    title: "React",
  },
  {
    icon: FaReact({ size: 30 }),
    title: "React Native",
  },
  {
    icon: FaNodeJs({ size: 30 }),
    title: "Node JS",
  },
];
