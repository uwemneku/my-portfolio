import React from "react";
import { Section } from "../components";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

function Experience() {
  return (
    <Section title="Experience">
      <motion.div
        onMouseOver={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distanceX = Math.abs(e.clientX - centerX);
          const distanceY = Math.abs(e.clientY - centerY);
          console.log(rect.left - e.clientX, distanceY);
        }}
        className="bg-red-500"
      >
        <div className="p-5 bg-slate-800  w-full drop-shadow-md shadow-md text-white rounded-md grid md:grid-cols-2 gap-10">
          {jobs.map((data, index) => (
            <div
              key={data.company}
              className={`flex gap-5 ${
                index === 0 ? "text-white" : "text-slate-300/90"
              }`}
            >
              <div
                className={`w-10 h-10 flex justify-center items-center shrink-0 rounded-full ${
                  index === 0 ? "bg-slate-400" : "bg-slate-900"
                } `}
              >
                <FiArrowUpRight className="font-bold" />
              </div>
              <div className="flex-1 grid gap-2">
                <p className="text-xs">{data.date}</p>
                <div>
                  <p className="font-bold text-lg">{data.title}</p>
                  <p className="font-medium text-sm">{data.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

const jobs: { date: string; title: string; company: string }[] = [
  {
    company: "RenderHeads",
    date: "2022 - Present",
    title: "Front-End developer",
  },
  {
    company: "3kle MFB Ltd ",
    date: "2021 - 2022",
    title: "React native developer",
  },
  {
    company: "Pyrafields Homes Limited",
    date: "2020 - 2021",
    title: "Javascript developer",
  },
];

export default Experience;
