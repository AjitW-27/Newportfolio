import React from "react";
import { FaExternalLinkAlt, FaLayerGroup } from "react-icons/fa";
import Reveal from "./Reveal";

/**
 * Large, two-column spotlight card for the featured project (HRMS).
 * Left: browser-style mockup panel (no real screenshot available yet).
 * Right: description, feature list, tech stack, CTA.
 */
const FeaturedProjectCard = ({ project }) => {
  const { title, tagline, description, tech, features, link, accent } = project;

  return (
    <Reveal>
      <div
        className="glass-card card-spotlight overflow-hidden grid lg:grid-cols-[1.05fr_1fr]"
        style={{ boxShadow: `0 25px 70px -25px ${accent}40, var(--shadow-card)` }}
      >
        {/* Visual panel */}
        <div
          className="relative flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 min-h-[320px]"
          style={{ background: `linear-gradient(160deg, ${accent}1c 0%, transparent 55%), var(--bg-elevated)` }}
        >
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `radial-gradient(circle at 25% 20%, ${accent}33, transparent 55%)`,
          }} />

          {/* Browser chrome mockup */}
          <div className="relative rounded-xl border border-[var(--glass-border)] bg-[#050f14]/70 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--glass-border)]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-[0.65rem] font-mono text-[var(--text-muted)]">hrms.app</span>
            </div>
            <div className="p-5 space-y-3">
              <div className="h-3 w-2/3 rounded-full" style={{ background: `${accent}55` }} />
              <div className="grid grid-cols-3 gap-2.5 mt-4">
                {["Employees", "Payroll", "Attendance"].map((m) => (
                  <div key={m} className="rounded-lg border border-[var(--glass-border)] p-2.5">
                    <FaLayerGroup size={12} style={{ color: accent }} />
                    <p className="text-[0.6rem] text-[var(--text-secondary)] mt-1.5">{m}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5 mt-4">
                <div className="h-2 w-full rounded-full bg-white/5" />
                <div className="h-2 w-5/6 rounded-full bg-white/5" />
                <div className="h-2 w-4/6 rounded-full bg-white/5" />
              </div>
            </div>
          </div>

          <span className="relative mt-6 pill w-max !py-1 !px-3" style={{ borderColor: `${accent}55`, color: accent }}>
            ★ Featured Project
          </span>
        </div>

        {/* Content panel */}
        <div className="p-7 sm:p-10 flex flex-col">
          <h3 className="font-display font-bold text-2xl sm:text-[1.7rem] text-[var(--text-primary)] leading-snug">
            {title}
          </h3>
          <p className="text-sm font-mono mt-1.5" style={{ color: accent }}>
            {tagline}
          </p>
          <p className="text-sm sm:text-[0.95rem] text-[var(--text-secondary)] mt-4 leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-6">
            {features.map((f) => (
              <div key={f} className="text-xs sm:text-[0.8rem] text-[var(--text-secondary)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                {f}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {tech.map((t) => (
              <span key={t} className="pill !py-1 !px-2.5 !text-[0.72rem]">
                {t}
              </span>
            ))}
          </div>

          <a
            href={link}
            target={link !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="btn-gradient justify-center mt-8 w-max"
          >
            {link === "#" ? "Link coming soon" : "View Project"}
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </Reveal>
  );
};

export default FeaturedProjectCard;
