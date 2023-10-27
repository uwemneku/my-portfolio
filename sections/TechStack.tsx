import React from "react";
import { stackIcons } from "../constants/data";
import { Section } from "../components";

function TechStack() {
  return (
    <Section title="Tech Stack">
      <ul className="flex flex-wrap justify-start gap-4 text-slate-200 max-w-[500px]">
        {stackIcons.map(({ Icon, title }, index) => (
          <li
            key={index}
            className="relative md:w-[120px] w-[80px] hover:bg-slate-700  flex-shrink-0 flex-grow-0  rounded-md m-2  shadow-sm bg-slate-800 shadow-black border-transparent z-10 border-2 hover:border-slate-500 transition-all duration-200 ease-in-out hover:scale-105"
          >
            <div className="w-full h-full absolute rounded-md moving-border " />
            <div className="w-full h-full p-3 flex flex-col bg-slate-800 items-center">
              <Icon className="md:w-7 md:h-7 w-5 h-5" />
              <p className="mt-2 md:text-sm text-xs  font-semibold text-center">
                {title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default TechStack;
