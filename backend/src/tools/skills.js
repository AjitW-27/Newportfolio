const getSkills = () => {
    const skills = {
        frontend: [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Tailwind CSS",
            "Material UI",
        ],

        backend: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "Authentication",
            "JWT",
        ],

        database: [
            "MongoDB",
            "Mongoose",
            "MySQL",
        ],

        tools: [
            "Git",
            "GitHub",
            "Postman",
            "VS Code",
        ],

        ai: [
            "Python",
            "Generative AI",
            "LLM APIs",
            "Prompt Engineering",
            "Agentic AI",
            "AI Tools and Function Calling",
        ],
    };

    return skills;
};

module.exports = getSkills;