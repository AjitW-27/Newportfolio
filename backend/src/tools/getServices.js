const getServices = () => {
    const services = [
        {
            id: "full-stack-development",

            title: "Full-Stack Application Development",

            shortDescription:
                "Designing and developing end-to-end web applications with modern frontend interfaces, backend APIs, authentication, and database integration.",

            capabilities: [
                "Business Management Systems",
                "Admin Dashboards",
                "Custom Web Applications",
                "MERN Stack Applications",
                "Authentication and Role-Based Access",
                "REST API Development",
                "Database-Driven Applications",
            ],

            technologies: [
                "React.js",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "REST APIs",
                "JWT Authentication",
            ],

            relatedProjects: [
                "HRMS – Human Resource Management System",
                "Book Store",
            ],

            idealFor: [
                "Startups",
                "Small Businesses",
                "Internal Company Tools",
                "Business Automation",
            ],
        },

        {
            id: "frontend-development",

            title: "Frontend & Dashboard Development",

            shortDescription:
                "Building responsive, scalable, and user-focused interfaces for web applications and business dashboards.",

            capabilities: [
                "React.js Applications",
                "Responsive Interfaces",
                "Admin Dashboards",
                "Data Management Interfaces",
                "API Integration",
                "Component-Based Architecture",
            ],

            technologies: [
                "React.js",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Material UI",
            ],

            relatedProjects: [
                "HRMS – Human Resource Management System",
                "Grocery Management System",
                "React CRUD Application",
            ],
        },

        {
            id: "backend-api-development",

            title: "Backend & API Development",

            shortDescription:
                "Developing backend services and REST APIs that power modern web applications, including authentication, data management, and frontend integration.",

            capabilities: [
                "REST API Development",
                "Authentication",
                "Authorization",
                "CRUD Operations",
                "Database Integration",
                "Frontend-Backend Integration",
            ],

            technologies: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "JWT",
                "REST APIs",
            ],

            relatedProjects: [
                "HRMS – Human Resource Management System",
                "Book Store",
            ],
        },

        {
            id: "ai-agent-development",

            title: "AI-Powered & Agentic Applications",

            shortDescription:
                "Building AI-powered applications where language models can interact with application data, use tools, retrieve relevant information, and support structured workflows.",

            capabilities: [
                "AI Chat Interfaces",
                "LLM API Integration",
                "Tool and Function Calling",
                "Knowledge-Based AI Assistants",
                "Agent Workflows",
                "AI-Powered Business Features",
            ],

            technologies: [
                "JavaScript",
                "Python",
                "LLM APIs",
                "Generative AI",
                "Prompt Engineering",
                "Tool Calling",
                "Agentic AI",
            ],

            relatedProjects: [
                "AI Assistant",
                "Ajit AI Portfolio Agent",
            ],

            status:
                "Actively building and expanding practical experience in AI-powered and agentic application development.",
        },
    ];

    return services;
};

module.exports = getServices;