import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data/skills.js";
import { reveal } from "@/lib/reveal.js";

const ICONS = {
    frontend: "M3 3h18v14H3V3zm2 2v10h14V5H5zm-1 14h16v2H4v-2z",
    backend: "M4 4h16v6H4V4zm0 10h16v6H4v-6zm2-8v2h2V6H6zm0 10v2h2v-2H6z",
    database: "M12 2c4.42 0 8 1.34 8 3v14c0 1.66-3.58 3-8 3s-8-1.34-8-3V5c0-1.66 3.58-3 8-3zm6 5.12C16.55 7.8 14.4 8.2 12 8.2s-4.55-.4-6-1.08V19c.13.34 2.3 1.2 6 1.2s5.87-.86 6-1.2V7.12zM12 4c-3.7 0-5.87.86-6 1.2.13.34 2.3 1.2 6 1.2s5.87-.86 6-1.2C17.87 4.86 15.7 4 12 4z",
    tools: "M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1 2.6-2.5z",
    design: "M12 2a10 10 0 1 0 0 20 3 3 0 0 0 3-3c0-.78-.3-1.5-.8-2 .5-.5 1.3-.8 2.3-.8H19a3 3 0 0 0 3-3c0-5.52-4.48-9-10-9zm-5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",
};

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div className="sec-head center" {...reveal}>
                    <p className="eyebrow">What I can do</p>
                    <h2>My toolkit.</h2>
                    <p className="desc">Comfortable across the stack — and always adding to it.</p>
                </motion.div>

                <div className="skills-grid">
                    {skillGroups.map((group) => (
                        <motion.div className="skill-cat" key={group.id} {...reveal}>
                            <h4>
                                <span className="ic">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d={ICONS[group.icon]} /></svg>
                                </span>
                                {group.title}
                            </h4>
                            <div className="skill-list">
                                {group.items.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
