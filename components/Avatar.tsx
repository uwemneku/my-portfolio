import Image from "next/image";
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function Avatar() {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.2], {
      clamp: true,
    })
  );

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
