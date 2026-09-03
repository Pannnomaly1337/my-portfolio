// Categorized skill groups (replaces the flat develops.js / designs.js lists)
// `icon` is a key resolved to an inline SVG inside Skills.jsx
export const skillGroups = [
    {
        id: 1,
        icon: "frontend",
        title: "Frontend",
        items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js", "shadcn/ui", "React Hook Form", "Zod"],
    },
    {
        id: 2,
        icon: "backend",
        title: "Backend",
        items: ["Node.js", "Express.js", "NestJS", "REST APIs", "JWT", "bcrypt", "Socket.IO"],
    },
    {
        id: 3,
        icon: "database",
        title: "Database",
        items: ["PostgreSQL", "Prisma ORM", "MongoDB", "Mongoose"],
    },
    {
        id: 4,
        icon: "tools",
        title: "Tools & Cloud",
        items: ["Git & GitHub", "Vercel", "Render", "Google Gemini API"],
    },
    {
        id: 5,
        icon: "design",
        title: "Design",
        items: ["Figma", "Canva", "Photoshop", "Lightroom", "Procreate", "After Effects"],
    },
];
