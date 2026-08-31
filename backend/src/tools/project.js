
const getProjects = () => {
    const projects = [
        {
            id: "hrms",
            name: "HRMS – Human Resource Management System",
            type: "Full Stack MERN Application",
            featured: true,
            status: "In Progress",

            description:
                "A self-built full-stack Human Resource Management System designed to streamline core HR operations through a secure, role-based admin dashboard.",

            overview:
                "Built end-to-end using the MERN stack, the application manages employees, departments, projects, attendance, payroll, and company assets.",

            image: "/hrmsImg.png",
            technologies: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "JWT Authentication",
                "Tailwind CSS"
            ],

            features: [
                "Employee Management",
                "Department Management",
                "Project Management",
                "Attendance Tracking",
                "Payroll Management",
                "Asset Management",
                "Admin Dashboard",
                "Authentication",
                "Role-Based Access Control"
            ],

            category: [
                "Full Stack Development",
                "Admin Dashboard",
                "Business Application"
            ],

            relevantSkills: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "Authentication",
                "Dashboard Development"
            ],

            githubUrl: "#",
            liveUrl: "#",
            accent: "#10b981"
        },

        {
            name: "AI Assistant",
            type: "AI-Powered Web Application",
            featured: true,
            status: "Completed",

            description:
                "A ChatGPT-style AI assistant that allows users to interact with an AI model through a conversational web interface.",

            overview:
                "An AI-powered conversational application designed to provide intelligent responses through a clean and responsive chat interface.",

            image: "/assistant.png",

            features: [
                "Interactive Chat Interface",
                "AI-Generated Responses",
                "AI API Integration",
                "Conversation-Based Interaction",
                "Responsive User Interface"
            ],

            technologies: [
                "JavaScript",
                "HTML",
                "CSS",
                "AI API"
            ],

            category: [
                "Artificial Intelligence",
                "Generative AI",
                "Frontend Development"
            ],

            relevantSkills: [
                "AI API Integration",
                "Generative AI",
                "JavaScript",
                "API Integration",
                "Responsive UI Development"
            ]
        },
        {
            name: "Book Store",

            type: "Full Stack MERN Application",

            featured: true,

            status: "Completed",

            description:
                "A full-stack online book store application that allows users to browse, search, and manage books through an interactive and user-friendly platform.",

            overview:
                "A MERN stack web application designed to provide a seamless online book browsing experience with a responsive frontend and backend API integration for managing book data.",

            image: "/bookstore.png",

            features: [
                "Browse and View Books",
                "Book Search Functionality",
                "Dynamic Book Management",
                "RESTful API Integration",
                "Responsive User Interface"
            ],

            technologies: [
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "JavaScript",
                "HTML",
                "CSS"
            ],

            category: [
                "Full Stack Development",
                "MERN Stack",
                "Web Development"
            ],

            relevantSkills: [
                "MERN Stack Development",
                "REST API Development",
                "Frontend Development",
                "Backend Development",
                "MongoDB",
                "API Integration",
                "Responsive UI Development"
            ]
        },

        {
            name: "Grocery Management System",

            type: "Full Stack Web Application",

            featured: true,

            status: "Completed",

            description:
                "A responsive grocery management application that allows users to browse products, manage grocery items, add products to a shopping cart, and track the total dynamically.",

            overview:
                "A modern grocery management web application designed to provide a smooth shopping experience with product management, cart functionality, dynamic calculations, and a responsive user interface. The project demonstrates practical frontend development skills and can be extended with backend APIs, authentication, database integration, and real-time product management.",

            image: "/grocery-store.png",

            features: [
                "Product Browsing",
                "Product Management",
                "Shopping Cart",
                "Add and Remove Cart Items",
                "Dynamic Total Calculation",
                "Quantity Management",
                "Interactive User Interface",
                "Responsive Design"
            ],

            technologies: [
                "JavaScript",
                "HTML",
                "CSS"
            ],

            category: [
                "Frontend Development",
                "Web Application",
                "Full Stack Development"
            ],

            relevantSkills: [
                "JavaScript",
                "Frontend Development",
                "Backend Development",
                "Full Stack Development",
                "State Management",
                "Cart Management",
                "Dynamic Data Handling",
                "REST API Integration",
                "Database Integration",
                "Responsive Web Design",
                "UI Development",
                "CRUD Operations"
            ]
        },

        {
            name: "Currency Converter",
            type: "API-Based Web Application",

            description:
                "A real-time currency converter that fetches exchange rate data from an external API and dynamically converts between currencies.",

            features: [
                "Real-Time Exchange Rates",
                "External API Integration",
                "Currency Conversion",
                "Dynamic User Interface"
            ],

            technologies: [
                "JavaScript",
                "HTML",
                "CSS",
                "REST API"
            ],

            category: [
                "API Integration",
                "Frontend Development"
            ],

            relevantSkills: [
                "JavaScript",
                "REST APIs",
                "API Integration"
            ]
        },

        {
            name: "React CRUD Application",
            type: "React Application",

            description:
                "A CRUD application built using React Hooks and functional components to manage application data efficiently.",

            features: [
                "Create Records",
                "Read Records",
                "Update Records",
                "Delete Records",
                "React Hooks",
                "Component-Based Architecture"
            ],

            technologies: [
                "React.js",
                "JavaScript",
                "React Hooks"
            ],

            category: [
                "Frontend Development",
                "CRUD Application"
            ],

            relevantSkills: [
                "React.js",
                "JavaScript",
                "React Hooks"
            ]
        }
    ];

    return projects;
};

module.exports = getProjects;