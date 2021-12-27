import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from "react";

function Header() {
  const { scrollY } = useViewportScroll();
  const height = useTransform(scrollY, [0, 100], ["0%", "100%"]);
  return (
    <motion.header className="sticky top-0 p-5 z-50">
      <motion.div
        style={{ height }}
        className="absolute bottom-0 right-0 bg-blue-500 w-full"
      />
      Uwem Isreal
    </motion.header>
  );
}

export default Header;
