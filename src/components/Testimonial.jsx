import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials.js";
import { reveal } from "@/lib/reveal.js";

const ROLES = { Neeti: "Technical Instructor", Mean: "Instructor", Kan: "Instructor" };

export default function Testimonial() {
    const [i, setI] = useState(0);
    const count = testimonials.length;

    const go = useCallback((n) => setI((n + count) % count), [count]);

    useEffect(() => {
        const id = setInterval(() => setI((prev) => (prev + 1) % count), 6000);
        return () => clearInterval(id);
    }, [count]);

    return (
        <section id="voices" className="section">
            <div className="container">
                <motion.div className="sec-head center" {...reveal}>
                    <p className="eyebrow">What they say</p>
                    <h2>Words from my mentors.</h2>
                </motion.div>

                <motion.div className="tst-wrap" {...reveal}>
                    <div className="tst-track">
                        <div className="tst-row" style={{ transform: `translateX(-${i * 100}%)` }}>
                            {testimonials.map((t) => (
                                <div className="tst" key={t.id}>
                                    <div className="tst-card">
                                        <div className="tst-stars">{"★".repeat(Number(t.star))}</div>
                                        <p>&ldquo;{t.description}&rdquo;</p>
                                        <div className="tst-person">
                                            <img src={`/${t.image}`} alt={t.alt} />
                                            <div style={{ textAlign: "left" }}>
                                                <div className="nm">{t.name}</div>
                                                <div className="rl">{ROLES[t.name] ?? "Mentor"}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tst-nav">
                        <button onClick={() => go(i - 1)} aria-label="Previous">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
                        </button>
                        <div className="dots">
                            {testimonials.map((_, j) => (
                                <button key={j} className={j === i ? "active" : ""} onClick={() => go(j)} aria-label={`Go to review ${j + 1}`} />
                            ))}
                        </div>
                        <button onClick={() => go(i + 1)} aria-label="Next">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
