import React from "react";
import Button from "../ui/Button";
import MyImg from "../../../public/MyImg.png";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-6">
              Full-Stack Developer & AI Application Builder
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--text-primary)]">
              Building modern web applications and{" "}
              <span className="text-gradient">
                intelligent AI-powered experiences.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              I'm Ajit Wadikar, a Full-Stack Developer focused on building
              responsive frontend applications, scalable backend APIs, and
              practical AI-powered solutions using modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button to="/projects" variant="gradient">
                View My Work →
              </Button>

              <Button to="/contact" variant="glass">
                Let's Work Together
              </Button>
            </div>
          </div>

          {/* Right Image */}

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl rounded-3xl overflow-hidden">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-transparent blur-2xl" />

              <img
                src={MyImg}
                alt="Ajit Wadikar - Full Stack Developer"
                /* Changed aspect ratio from [4/5] to [16/11] or [4/3] to make it wider without increasing height */
                className="relative w-full aspect-[16/12] object-cover object-center rounded-3xl border border-[var(--glass-border)]"
              />

              <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-sm text-emerald-400">Currently Building</p>

                <p className="text-sm mt-1 text-white">
                  Full-Stack Applications & AI-Powered Experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
