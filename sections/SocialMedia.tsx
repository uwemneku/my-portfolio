import { Variants, motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function SocialMedia() {
  return (
    <div className="text-slate-300 flex gap-3">
      {links.map(({ Icon, title, link }, index) => (
        <motion.a
          target="_blank"
          href={link}
          key={title}
          {...iconProps}
          custom={(1 + index) / 2}
        >
          <Icon
            size={30}
            className="transform hover:scale-110 hover:text-blue-300"
          />
        </motion.a>
      ))}
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

const links: { Icon: IconType; title: string; link: string }[] = [
  { Icon: AiFillGithub, link: "https://github.com/uwemneku", title: "github" },
  {
    Icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/uwemisrael/",
    title: "linkedin",
  },
  { Icon: AiFillMail, link: "mailto:iamuwem@gmail.com", title: "email" },
];

export default SocialMedia;
