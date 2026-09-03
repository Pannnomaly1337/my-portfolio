/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data/experiences.js";
import { educations } from "@/lib/data/educations.js";
import { reveal } from "@/lib/reveal.js";

function Timeline({ items }) {
    return (
        <div className="timeline">
            {items.map((item) => (
                <motion.div className="tl-item" key={item.id} {...reveal}>
                    <div className="tl-top">
                        <div>
                            <h4>{item.title}</h4>
                            <span className="tl-sub">{item.subTitle}</span>
                        </div>
                        <span className="tl-year">{item.year}</span>
                    </div>
                    <p>{item.description}</p>
                </motion.div>
            ))}
        </div>
    );
}

export default function Journey() {
    const [view, setView] = useState("experience");

    return (
        <section id="journey" className="section">
            <div className="container">
                <motion.div className="sec-head center" {...reveal}>
                    <p className="eyebrow">My path</p>
                    <h2>Experience &amp; education.</h2>
                </motion.div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="toggle">
                        <button className={view === "experience" ? "active" : ""} onClick={() => setView("experience")}>
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5V2h10v3h4v14H3V5h4zm2-1v1h6V4H9zm-2 3H5v10h14V7h-2v3h-2V7H9v3H7V7z" /></svg>
                            Experience
                        </button>
                        <button className={view === "education" ? "active" : ""} onClick={() => setView("education")}>
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 1 8l4 2.18v6L12 20l7-3.82v-6l2-1.09V16h2V8L12 2zm6.82 6L12 11.72 5.18 8 12 4.28 18.82 8zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" /></svg>
                            Education
                        </button>
                    </div>
                </div>

                {view === "experience" ? <Timeline items={experiences} /> : <Timeline items={educations} />}
            </div>
        </section>
    );
}
