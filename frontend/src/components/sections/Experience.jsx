import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[var(--accent-1)] via-[var(--accent-2)] to-transparent" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.id} delay={Math.min(i + 1, 5)} className="relative">
                <span
                  className={`absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full border-2 ${
                    job.current ? "bg-[var(--accent-2)] border-[var(--accent-2)] shadow-[0_0_0_4px_rgba(34,211,238,0.2)]" : "bg-[var(--bg-elevated)] border-[var(--accent-1)]"
                  }`}
                />
                <div className="glass-card px-6 py-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-between">
                    <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                      {job.role}
                    </h3>
                    {job.current && (
                      <span className="pill !border-[var(--accent-2)]/40 !text-[var(--accent-2)] !py-0.5 !px-2.5 !text-[0.7rem]">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm mt-1" style={{ color: "var(--accent-2)" }}>
                    {job.org} {job.duration && `· ${job.duration}`}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{job.period}</p>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((p, idx) => (
                      <li key={idx} className="text-sm text-[var(--text-secondary)] leading-relaxed flex gap-2">
                        <span className="text-[var(--accent-2)] mt-1.5 shrink-0">▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
