import React, { PropsWithChildren } from "react";

function Section({ children, title }: PropsWithChildren<{ title: string }>) {
  return (
    <section className="grid gap-5">
      <h2 className="font-semibold text-lg md:text-3xl text-white">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
