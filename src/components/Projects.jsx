import { useState } from "react";
import { motion } from "framer-motion";
import { projects, projectFilters } from "@/lib/data/projects.js";
import { reveal } from "@/lib/reveal.js";
import FeaturedProject from "./FeaturedProject.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
    const [active, setActive] = useState("all");

    const featured = projects.find((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);
    const visible = active === "all" ? rest : rest.filter((p) => p.filter === active);

    return (
        <section id="work" className="section">
            <div className="container">
                <motion.div className="sec-head" {...reveal}>
                    <p className="eyebrow">Selected work</p>
                    <h2>Projects I&apos;m proud of.</h2>
                    <p className="desc">A production system, full-stack apps, and the fundamentals I built along the way.</p>
                </motion.div>

                {featured && (
                    <motion.div {...reveal}>
                        <FeaturedProject project={featured} />
                    </motion.div>
                )}

                <motion.div className="filters" {...reveal}>
                    {projectFilters.map((f) => (
                        <button
                            key={f.key}
                            className={`filter ${active === f.key ? "active" : ""}`}
                            onClick={() => setActive(f.key)}
                        >
                            {f.label}
                        </button>
                    ))}
                </motion.div>

                <div className="grid">
                    {visible.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
