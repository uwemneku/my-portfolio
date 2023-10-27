import Image from "next/image";
import React from "react";
import { useResponsiveBreakpoint } from "../hooks";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function Avatar() {
  const imageSize = useResponsiveBreakpoint() === "mobile" ? 50 : 75;
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  return (
    <motion.figure style={{ scale }} className="w-fit">
      <Image
        src={"/uwem.jpg"}
        width={imageSize}
        height={imageSize}
        objectFit="cover"
        objectPosition="center"
        alt="sss"
        className="rounded-full border-2 border-white"
      />
    </motion.figure>
  );
}

export default Avatar;
