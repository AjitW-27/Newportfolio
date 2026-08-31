import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";

const ProjectCard = ({ project, delay = 0 }) => {
  const { name, type, description, technologies = [], image } = project;

  const imageUrl = image
    ? `${import.meta.env.BASE_URL}${image.replace(/^\//, "")}`
    : "";

  return (
    <Reveal delay={delay} className="h-full">
      <div className="glass-card card-spotlight h-full flex flex-col overflow-hidden group">
        {/* Project Image */}
        <div className="w-full h-64 overflow-hidden">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-xs font-mono text-emerald-400 mb-2">{type}</p>

          <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
            {name}
          </h3>

          <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="pill !py-1 !px-2.5 !text-[0.7rem]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)]">
            <span>Project Details</span>
            <FaExternalLinkAlt size={11} />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
