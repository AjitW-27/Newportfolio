import React, { useState } from "react";
import MyImg from "../../assets/images/ajit-profile.jpg";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import FloatingBlobs from "../ui/FloatingBlobs";
import skills from "../../data/skills";
import education from "../../data/education";
import Button from "../ui/Button";

const About = () => {
  const [touched, setTouched] = useState(false);

  return (
    <section id="about" className="relative py-15 px-5 overflow-hidden">
      <FloatingBlobs variant="section" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* Photo + MERN badge */}
          <Reveal className="w-full lg:w-[300px] flex flex-col items-center gap-8 shrink-0 mx-auto lg:mx-0">
            <div
              onClick={() => setTouched((v) => !v)}
              className="relative cursor-pointer group"
            >
              <div className="absolute -inset-1.5 rounded-2xl bg-[var(--grad-primary)] opacity-60 blur-lg group-hover:opacity-90 transition duration-500" />
              <img
                src={MyImg}
                alt="Ajit Laxman Wadikar"
                className={`relative w-56 h-72 object-cover rounded-2xl border border-[var(--glass-border)] transition duration-500 ${
                  touched ? "grayscale-0 scale-105" : "grayscale"
                } group-hover:grayscale-0 group-hover:scale-105`}
              />
            </div>

            <div className="glass-card w-full px-5 py-5 text-center">
              <p className="section-eyebrow mb-3">Core Stack</p>
              <div className="flex justify-center gap-4 text-2xl">
                {[
                  { l: "M", c: "#47a248" },
                  { l: "E", c: "#e8e8e8" },
                  { l: "R", c: "#22d3ee" },
                  { l: "N", c: "#68a063" },
                ].map((s) => (
                  <span
                    key={s.l}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center font-display font-bold"
                    style={{ color: s.c }}
                  >
                    {s.l}
                  </span>
                ))}
              </div>
            </div>

            <Button
              to="/contact"
              variant="gradient"
              className="w-full justify-center"
            >
              Hire Me
            </Button>
          </Reveal>

          {/* Bio + skills */}
          <div className="flex-1 space-y-10">
            <Reveal delay={1}>
              <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                Hi, I'm{" "}
                <strong className="text-white">Ajit Laxman Wadikar</strong>, a
                MERN Stack Developer based in Pune. I hold a{" "}
                <strong className="text-white">
                  B.Tech in Computer Science Engineering
                </strong>{" "}
                and a{" "}
                <strong className="text-white">Diploma in Engineering</strong>.
                I currently work as a{" "}
                <strong className="text-white">
                  Full Stack Engineer (1+ year experience)
                </strong>
                , where I build and maintain a self-designed{" "}
                <strong className="text-white">
                  HRMS (Human Resource Management System)
                </strong>{" "}
                — covering employees, attendance, payroll, projects and assets —
                end to end, across both frontend and backend. Before that, I
                interned as a{" "}
                <strong className="text-white">MERN Stack Developer</strong> and{" "}
                <strong className="text-white">Full Stack Developer</strong>,
                and I'm always looking to build products that are fast, scalable
                and genuinely useful.
              </p>
            </Reveal>

            {/* Education */}
            <Reveal delay={2}>
              <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] mb-4">
                Education
              </h3>
              <div className="space-y-3">
                {education.map((e) => (
                  <div key={e.id} className="glass-card !rounded-xl px-5 py-4">
                    <p className="font-medium text-[var(--text-primary)] text-sm sm:text-base">
                      {e.degree}
                    </p>
                    <p className="text-[var(--text-muted)] text-xs sm:text-sm mt-1">
                      {e.school}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Skills */}
            <div>
              <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] mb-5">
                Skills
              </h3>
              <div className="space-y-6">
                {skills.map((group, i) => (
                  <Reveal key={group.category} delay={Math.min(i + 1, 5)}>
                    <p
                      className="text-xs font-mono uppercase tracking-widest mb-3"
                      style={{ color: group.accent }}
                    >
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill} className="pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
