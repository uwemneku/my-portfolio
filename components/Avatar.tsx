import Image from "next/image";
import React from "react";
import { useResponsiveBreakpoint } from "../hooks";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function Avatar() {
  const imageSize = useResponsiveBreakpoint() === "mobile" ? 50 : 75;
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  return (
    <motion.figure style={{ scale }} className="relative w-24 h-24">
      <Image
        src={"/uwem.jpg"}
        // width={imageSize}
        // height={imageSize}
        objectFit="cover"
        objectPosition="center"
        alt="Uwem Israel"
        fill
        className="rounded-full border-2 border-white relative"
      />
    </motion.figure>
  );
}

export default Avatar;
