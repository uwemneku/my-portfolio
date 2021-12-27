import { motion, MotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

interface Props {
  index: number;
  scrollY: MotionValue<number>;
  top: number | undefined;
}

const size = 500;
const Projects = ({ index, scrollY, top }: Props) => {
  const isEven = index % 2 === 0;
  const inputArray = [
    (index - 1) * size + 800,
    index * size - 200 + 800,
    index * size + 800,
    index * size + 250 + 800,
    (index + 1) * size + 800,
  ]; //-200 and + 250 is to make the project have the same size in the middle of the screen

  const opacity = useTransform(scrollY, inputArray, [0, 1, 1, 1, 0], {
    clamp: true,
  });

  const rotate = useTransform(
    scrollY,
    inputArray,
    [0, 0, 0, 0, isEven ? -90 : 90],
    {
      clamp: true,
    }
  );

  const radius = useTransform(scrollY, inputArray, [0, 0, 0, 0, 2000], {
    clamp: true,
  });

  const backgroundColor = useTransform(
    scrollY,
    inputArray,
    ["#808080", "#ffffff", "#ffffff", "#ffffff", "rgb(59, 130, 246)"],
    { clamp: true }
  );

  useEffect(() => {
    console.log(top);
  }, [top]);
  return (
    <motion.div
      className={`shadow-blue-400 relative pt-7 md:pt-14 px-11 p-5 m-3 border-2 rounded-md h-[500px]`}
      style={{
        rotate,
        opacity,
        zIndex: index,
        backgroundColor,
        transformOrigin: isEven ? "bottom left" : `bottom right`,
        borderBottomRightRadius: isEven ? radius : undefined,
        borderBottomLeftRadius: isEven ? undefined : radius,
      }}
    >
      {index}
    </motion.div>
  );
};

export default Projects;
