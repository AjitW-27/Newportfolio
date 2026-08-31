import BookStoreImage from "../assets/images/Book-Store.png";
import MyAssistantImage from "../assets/images/My-Assistant.png";
import ReactCrudImage from "../assets/images/React-Crud.png";
import GroceryMartImage from "../assets/images/Grocery-Mart.png";
import CurrencyImage from "../assets/images/Currency-Converter.png";

// 👉 Add your HRMS GitHub / live link here once it's ready.
export const HRMS_LINK = "#";

const projects = [
  {
    id: "hrms",
    featured: true,
    title: "HRMS – Human Resource Management System",
    tagline: "Self-built full-stack MERN application",
    description:
      "A complete Human Resource Management System built end-to-end — frontend and backend — to streamline core HR operations for a company: employees, departments, projects, attendance, payroll and assets, all behind a secure, role-based admin dashboard.",
    features: [
      "Employee Management",
      "Department Management",
      "Project Management",
      "Attendance Tracking",
      "Payroll Management",
      "Asset Management",
      "Admin Dashboard",
      "Authentication & Role-based Access",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "JWT Auth", "Tailwind CSS"],
    image: null, // no screenshot yet — rendered as a code-style preview card
    link: HRMS_LINK,
    accent: "#22d3ee",
  },
  {
    id: "book-store",
    title: "Book Store",
    tagline: "MERN stack e-commerce style app",
    description:
      "A full-featured MERN stack application that lets users browse, search and manage books with secure authentication and a dynamic UI, including light/dark mode and protected routes.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: BookStoreImage,
    link: "https://github.com/Ajuu07/Book-Store",
    accent: "#459bd5",
  },
  {
    id: "my-assistant",
    title: "My Assistant",
    tagline: "AI chat-style assistant",
    description:
      "A virtual assistant web app similar to ChatGPT or Gemini. Takes user input, sends it to an API, and displays AI-generated responses in a chat-like interface.",
    tech: ["HTML", "CSS", "JavaScript", "AI API"],
    image: MyAssistantImage,
    link: "https://github.com/Ajuu07/My-Assistant",
    accent: "#ffe578",
  },
  {
    id: "react-crud",
    title: "React CRUD App",
    tagline: "Hooks-based CRUD application",
    description:
      "A simple React-based CRUD application with Create, Read, Update and Delete functionality, built using React hooks and functional components for efficient state and UI management.",
    tech: ["React", "React Hooks", "JavaScript"],
    image: ReactCrudImage,
    link: "#",
    accent: "#fc815c",
  },
  {
    id: "grocery-mart",
    title: "Grocery Mart",
    tagline: "Responsive shopping cart UI",
    description:
      "A responsive grocery shop website where users can browse products, add them to a cart and view the total in real time, with an interactive UI and dynamic cart functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: GroceryMartImage,
    link: "https://github.com/Ajuu07/GroceryMart",
    accent: "#47afa1",
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    tagline: "Real-time exchange rate app",
    description:
      "A simple currency converter web app that allows users to convert between currencies in real time, with exchange rate data fetched via a live API.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    image: CurrencyImage,
    link: "https://github.com/Ajuu07/Simple-Currency-Converter",
    accent: "#fc815c",
  },
];

export default projects;
