import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import FloatingBlobs from "../ui/FloatingBlobs";

const CONTACT_INFO = [
  { icon: FaEnvelope, label: "Email", value: "ajitwadikar2050@gmail.com", href: "mailto:ajitwadikar2050@gmail.com" },
  { icon: FaLinkedinIn, label: "LinkedIn", value: "ajit-wadikar", href: "https://www.linkedin.com/in/ajit-wadikar-89642521b/" },
  { icon: FaGithub, label: "GitHub", value: "AjitW-27", href: "https://github.com/AjitW-27" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Pune, India", href: null },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_3dimsfp", "template_6otpmk6", form.current, "9Z70WFg7y3g3Ul1Hn")
      .then(() => {
        setStatus("success");
        e.target.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="relative py-24 px-5 overflow-hidden min-h-screen">
      <FloatingBlobs variant="section" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Let's build something"
          title="Get In Touch"
          subtitle="Have a role, project, or idea in mind? My inbox is open — I usually reply within a day."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <Reveal delay={1} className="lg:col-span-2 space-y-4">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass-card flex items-center gap-4 px-5 py-4 group"
                >
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[var(--grad-primary)]">
                    <Icon className="text-white" size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">{label}</p>
                    <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-gradient transition-colors">
                      {value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </Reveal>

          {/* Form */}
          <Reveal delay={2} className="lg:col-span-3">
            <form ref={form} onSubmit={sendEmail} className="glass-card p-6 sm:p-8 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[var(--text-muted)] font-medium">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                    className="bg-white/5 border border-[var(--glass-border)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-2)] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[var(--text-muted)] font-medium">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="you@example.com"
                    required
                    className="bg-white/5 border border-[var(--glass-border)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-2)] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-[var(--text-muted)] font-medium">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about the role or project..."
                  rows="5"
                  required
                  className="bg-white/5 border border-[var(--glass-border)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-2)] transition-colors resize-none"
                />
              </div>

              <button type="submit" disabled={status === "sending"} className="btn-gradient justify-center disabled:opacity-60">
                <FaPaperPlane size={13} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-emerald-400 text-sm font-medium text-center">✔ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-rose-400 text-sm font-medium text-center">
                  Something went wrong — please email me directly instead.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
