import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Resume from "../../assets/Ajit Wadikar_Resume.pdf";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-white bg-white/10"
        : "text-[var(--text-secondary)] hover:text-white hover:bg-white/5"
    }`;

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled ? "glass-navbar shadow-lg" : "bg-[#06181e]/80 backdrop-blur-md"}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <nav className="hidden md:flex flex-1 items-center justify-center gap-2">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a href={Resume} download className="hidden md:inline-flex btn-outline-glass !py-2 !px-4 text-sm shrink-0">
          Download Resume
        </a>

        <button
          className="md:hidden ml-auto w-10 h-10 rounded-lg glass flex flex-col justify-center items-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`w-5 h-0.5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 border-t border-white/10" : "max-h-0"}`}>
        <nav className="px-5 py-4 flex flex-col gap-1 bg-[#06181e]">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <a href={Resume} download className="btn-gradient justify-center mt-3 !py-2.5">Download Resume</a>
        </nav>
      </div>
    </header>
  );
}
