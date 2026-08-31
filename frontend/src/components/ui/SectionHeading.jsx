import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }) => {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <Reveal className={`flex flex-col ${alignClass} gap-3 mb-14`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient tracking-tight">
        {title}
      </h2>
      <div className="divider-gradient w-16 rounded-full" />
      {subtitle && (
        <p className="text-[var(--text-secondary)] max-w-2xl mt-1 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
