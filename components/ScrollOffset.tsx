import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { PropsWithChildren } from "react";

interface Props {
  start: number;
}
function ScrollOffset({ start, children }: PropsWithChildren<Props>) {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -30 - 100 * start]
  );
  const s = useSpring(translateY);
  return <motion.div style={{ translateY: s }}>{children}</motion.div>;
}

export default ScrollOffset;
