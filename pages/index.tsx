import React, { useRef } from "react";
import Head from "next/head";
import { motion, useViewportScroll, Variants } from "framer-motion";
import { useResponsiveBreakpoint } from "../hooks";
import { FaTiktok } from "react-icons/fa";
import { Avatar, Project } from "../components";
import TechStack from "../sections/TechStack";
import Experience from "../sections/Experience";
import SocialMedia from "../sections/SocialMedia";

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
        className="max-w-3xl ml-auto mr-auto overflow-x-hidden p-3 px-6 my-20"
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
            className="gap-5 grid"
          >
            <Avatar />
            <p className="font-bold text-3xl md:text-4xl text-white">
              {"Hi, I'm Israel"}
            </p>
            <SocialMedia />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-slate-300 text-sm md:text-base mb-12"
            >
              {`I'm a self taught developer that likes using Javascript/Typescript to create things in different environments
            such as automating google workspace, building web apps, and creating
            mobile applications`}
            </motion.p>
          </motion.div>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="gap-10 grid"
        >
          <TechStack />
          <Experience />

          {/* <section className="mt-12">
            <h2 className="font-semibold text-lg md:text-3xl text-white">
              Projects
            </h2>
            <div className="flex flex-wrap md:justify-start justify-center gap-16 p-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                const top = mainRef.current?.getBoundingClientRect().top;
                return <Project {...{ index, scrollY, top }} key={item} />;
              })}
            </div>
          </section> */}
        </motion.section>
      </main>
    </div>
  );
}
