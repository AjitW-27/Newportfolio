import skills from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Technical toolkit" title="Skills & Technologies" subtitle="A practical stack for building responsive interfaces, backend APIs, data-driven applications and AI-powered features." />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {skills.map((group, index) => <Reveal key={group.category} delay={(index % 5) + 1} className="h-full"><article className="glass-card p-6 h-full"><div className="flex items-center justify-between gap-3"><h3 className="font-display text-lg font-bold">{group.category}</h3><span className="w-3 h-3 rounded-full" style={{background:group.accent}} /></div><div className="flex flex-wrap gap-2 mt-5">{group.items.map((item) => <span className="pill" key={item}>{item}</span>)}</div></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
