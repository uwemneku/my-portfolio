import Image from "next/image";
import React from "react";
import image from "../public/moviesApp.png";

function Project() {
  return (
    <div className="p-5 shadow-sm shadow-gray-50 relative w-[240px] z-40 overflow-hidden">
      <p className="absolute bottom-0 right-0 text-xs p-1 bg-slate-900 text-white shadow-sm shadow-gray-50 font-extralight z-20 rounded-tl-md">
        React Native
      </p>
      <Image
        src={image}
        alt="Movies App"
        width={200}
        height={400}
        className="rounded-sm"
      />
      <p className="text-white font-bold absolute left-16 top-1/2 bg-slate-900 p-5 py-3 rounded-md shadow-sm shadow-gray-50 ">
        Movies App
      </p>
    </div>
  );
}

export default Project;
