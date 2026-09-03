export const projects = [
    {
        id: 1,
        featured: true,
        filter: "fullstack",
        tag: "Full-Stack",
        category: "Full-Stack · Hotel Property Management System",
        title: "HotelHub",
        status: "In progress",
        description:
            "A production-grade PMS for small-to-mid-sized hotels — a real-time management dashboard, over-booking prevention, and dynamic pricing to increase revenue. A solo build: I own the full architecture, database design, RBAC, and API.",
        tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Socket.IO", "Tailwind CSS"],
        image: "/project-hotelhub.png",
        live: "",
        repo: "https://github.com/Pannnomaly1337/hotelhub",
    },
    {
        id: 2,
        filter: "fullstack",
        tag: "Full-Stack",
        title: "Hotel Booking Website",
        description:
            "A full-stack booking platform with separate customer and admin interfaces, full CRUD, JWT authentication and a hardened API.",
        tech: ["React", "Express.js", "MongoDB", "JWT", "shadcn/ui"],
        image: "/project-001.png",
        live: "https://group-project-6-react.vercel.app/",
        repo: "https://github.com/Pannnomaly/GroupProject-6-React",
    },
    {
        id: 3,
        filter: "fullstack",
        tag: "Full-Stack",
        title: "Gamification Rewards System",
        description:
            "A complete game loop — play, earn score, claim rewards, view history, reset — backed by a typed REST API and a relational schema.",
        tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma ORM", "TypeScript"],
        image: "/project-002.png",
        live: "https://gamification-rewards-system.vercel.app/",
        repo: "https://github.com/Pannnomaly1337/gamification-rewards-system",
    },
    {
        id: 4,
        filter: "frontend",
        tag: "Frontend",
        title: "React CRUD App",
        description:
            "A CRUD application demonstrating create, read, update and delete flows with a clean React component structure.",
        tech: ["React", "Tailwind CSS", "JavaScript"],
        image: "/project-005.png",
        live: "https://react-crud-app-delta-two.vercel.app/",
        repo: "https://github.com/Pannnomaly1337/react-crud-app",
    },
    {
        id: 5,
        filter: "frontend",
        tag: "Frontend",
        title: "Online Flower Shop",
        description:
            "A responsive flower-shop storefront built from a design concept — clean UI and layout across every device.",
        tech: ["React", "Tailwind CSS", "Figma"],
        image: "/project-004.png",
        live: "https://online-flower-shop-chi.vercel.app/",
        repo: "https://github.com/Pannnomaly1337/online-flower-shop",
    },
    {
        id: 6,
        filter: "logic",
        tag: "Logic",
        title: "Dice Roller (JS DOM)",
        description:
            "A dice-rolling app built to practice JavaScript DOM manipulation and event handling.",
        tech: ["JavaScript", "HTML5", "CSS3"],
        image: "/project-006.png",
        live: "https://jsd11-dice-roller-39-pann.vercel.app/",
        repo: "https://github.com/Pannnomaly/jsd11-dice-roller",
    },
    {
        id: 7,
        filter: "logic",
        tag: "Logic",
        title: "Find Your Hat (JS Logic)",
        description:
            "A terminal logic game implementing grid navigation and game-state handling in JavaScript.",
        tech: ["JavaScript", "Node.js"],
        image: "/project-007.png",
        live: "",
        repo: "https://github.com/Pannnomaly/39-Pann-find-your-hat",
    },
    {
        id: 8,
        filter: "basics",
        tag: "First project",
        title: "Colmar Academy",
        description:
            "A responsive landing page built early in my journey to practice semantic HTML and CSS layout.",
        tech: ["HTML5", "CSS3"],
        image: "/project-008.png",
        live: "https://39-pann-colmar.vercel.app/",
        repo: "https://github.com/Pannnomaly/39-pann-colmar",
    },
];

// Filter tabs shown above the projects grid
export const projectFilters = [
    { key: "all", label: "All" },
    { key: "fullstack", label: "Full-Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "logic", label: "Logic" },
    { key: "basics", label: "Basics" },
];
