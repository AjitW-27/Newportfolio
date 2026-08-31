const getProjects = require("../tools/project");
const getSkills = require("../tools/skills");
const { getBlogs } = require("../tools/blog");

function findMatches(query, items, fields) { return items.filter(item => fields.some(field => String(item[field] || "").toLowerCase().includes(query))); }
exports.chat = (req, res) => {
  const message = String(req.body?.message || "").trim();
  if (!message) return res.status(400).json({ success:false, message:"Message is required" });
  const q = message.toLowerCase(); const projects=getProjects(); const skills=getSkills(); const blogs=getBlogs();
  let reply;
  if (q.includes("project") || q.includes("hrms") || q.includes("book store") || q.includes("grocery")) {
    const direct=findMatches(q,projects,["name","description","overview"]); const list=(direct.length?direct:projects.slice(0,4)).map(p=>p.name).join(", ");
    reply=`Ajit's portfolio includes ${projects.length} projects. Key work includes ${list}. The HRMS project demonstrates full-stack development with React, Node.js, Express, MongoDB, APIs and dashboard modules.`;
  } else if (q.includes("skill") || q.includes("technology") || q.includes("stack")) {
    reply=`Ajit's core stack covers Frontend: ${skills.frontend.join(", ")}. Backend: ${skills.backend.join(", ")}. AI and Python interests include ${skills.ai.join(", ")}. He also works with databases, REST APIs, Git and deployment tools.`;
  } else if (q.includes("ai") || q.includes("agent") || q.includes("python")) {
    reply="Ajit is building practical AI-powered web experiences around AI API integration, Generative AI, prompt design, portfolio-aware assistants and Agentic AI concepts. JavaScript is his primary application language, while Python is part of his AI and automation learning stack.";
  } else if (q.includes("blog") || q.includes("article") || q.includes("learn")) {
    reply=`The blog currently covers ${blogs.map(b=>b.title).join("; ")}. You can open the Blog page to read the full articles.`;
  } else if (q.includes("experience") || q.includes("work")) {
    reply="Ajit works across frontend and backend responsibilities, building reusable React interfaces, integrating APIs and developing practical full-stack applications. His experience also includes MERN and Full Stack Developer internships.";
  } else if (q.includes("hire") || q.includes("contact") || q.includes("freelance")) {
    reply="You can use the Contact page or Ajit's portfolio contact links to discuss frontend, MERN stack or AI-powered application work. Describe your project, required features and timeline for the best starting point.";
  } else {
    reply="I’m Ajit's portfolio knowledge assistant. I can route your question to information about projects, skills, MERN development, AI and Python, experience, blog articles or collaboration. Try one of the quick questions below.";
  }
  res.json({success:true,reply,suggestions:["Tell me about the HRMS project","What technologies does Ajit use?","How is AI integrated into this portfolio?","How can I contact Ajit?"]});
};
