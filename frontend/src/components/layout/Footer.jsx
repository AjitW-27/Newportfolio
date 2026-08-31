import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const SOCIALS = [
  { href: "https://www.linkedin.com/in/ajit-wadikar-89642521b/", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://github.com/AjitW-27", icon: FaGithub, label: "GitHub" },
  { href: "https://www.instagram.com/ajuuu_07___/", icon: FaInstagram, label: "Instagram" },
  { href: "mailto:ajitwadikar2050@gmail.com", icon: FaEnvelope, label: "Email" },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleGoToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <footer className="relative mt-24">
      <div className="divider-gradient w-full opacity-40" />
      <div className="glass border-t-0 rounded-none">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-lg text-gradient">Ajit Wadikar</p>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              © {new Date().getFullYear()} · MERN Stack Developer · Pune, India
            </p>
          </div>

          <ul className="flex gap-8 text-sm">
            <li>
              <Link to="/about" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:-translate-y-1 hover:border-[var(--glass-border-hover)] transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href="/"
              onClick={handleGoToTop}
              title="Back to top"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white btn-gradient !p-0"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
