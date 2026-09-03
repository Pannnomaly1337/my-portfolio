import { motion } from "framer-motion";
import { reveal } from "@/lib/reveal.js";

const TAGS = ["🇹🇭 Based in Thailand", "Bangkok-focused", "Onsite or remote", "Open to relocation"];

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container about-grid">
                <motion.div className="about-img" {...reveal}>
                    <div className="blob"></div>
                    <img src="/about-pic.PNG" alt="About Supawith" />
                </motion.div>

                <motion.div className="about-body" {...reveal}>
                    <p className="eyebrow">Where creativity meets code</p>
                    <h2>From the science lab<br />to the code editor.</h2>
                    <p>
                        I hold a <b>B.Sc. in Biology</b> and spent years training in analytical, evidence-driven thinking. I now bring that same rigor to software — building <b>modern, scalable web applications</b> from frontend to backend.
                    </p>
                    <p>
                        Driven by curiosity and continuous learning, I enjoy experimenting with new technologies and shipping real, functional products that solve real problems.
                    </p>
                    <div className="about-tags">
                        {TAGS.map((t) => (
                            <span className="chip" key={t}>{t}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
