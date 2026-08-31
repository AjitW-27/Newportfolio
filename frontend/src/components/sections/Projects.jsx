import { useEffect, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import FloatingBlobs from "../ui/FloatingBlobs";
import API_URL from "../../config/api";
import localProjects from "../../data/projects";

export default function Projects() {
  const [projects, setProjects] = useState(localProjects || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch(`${API_URL}/projects`, {
          signal: controller.signal,
        });
        const type = response.headers.get("content-type") || "";
        if (!response.ok || !type.includes("application/json"))
          throw new Error("API unavailable");
        const data = await response.json();
        if (Array.isArray(data.projects) && data.projects.length)
          setProjects(data.projects);
      } catch (error) {
        if (error.name !== "AbortError")
          console.warn("Using local project fallback.", error);
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, []);

  const featuredProjects = projects
    .filter(Boolean)
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section
      id="projects"
      className="relative py-15 md:py-28 px-5 overflow-hidden min-h-[760px]"
    >
      <FloatingBlobs variant="section" />
      <div className="relative z-10 max-w-[1500px] mx-auto">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="Full-stack, frontend and AI-powered applications focused on practical user experiences."
        />
        {loading && !projects.length ? (
          <p className="text-center text-[var(--text-secondary)]">
            Loading projects...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id || project.name}
                project={project}
                delay={(index % 4) + 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
