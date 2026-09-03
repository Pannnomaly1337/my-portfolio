import { motion } from "framer-motion";
import { reveal } from "@/lib/reveal.js";

const EMAIL = "s.jangtrakul@gmail.com";
const ARROW = "M5.63 19.78 4.22 18.36 15.66 6.93H10.07v-2h9v9h-2V8.34z";
const DOWNLOAD = "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z";

const PROFILES = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/supawith-jangtrakul-8920173a4/" },
    { label: "GitHub", href: "https://github.com/Pannnomaly1337" },
    { label: "JobsDB", href: "https://th.jobsdb.com/th/profiles/ศุภวิชญ์-จังตระกูล-lLPkHHNVJW" },
];
const SAYHI = [
    { label: "Facebook", href: "https://www.facebook.com/pann.supawith.jangtrakul" },
];

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="blob"></div>
            <div className="container">
                <motion.div {...reveal}>
                    <h2>Let&apos;s build something.</h2>
                    <p className="lead">Open to frontend, backend &amp; full-stack roles — let&apos;s connect.</p>
                    <a className="btn copy-btn" href={`mailto:${EMAIL}`}>
                        <span>Email me</span>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    </a>
                </motion.div>

                <motion.div className="contact-cards" {...reveal}>
                    <div>
                        <h4>Email</h4>
                        <address>{EMAIL}</address>
                        <h4 style={{ marginTop: "1.4rem" }}>Location</h4>
                        <address>Bangkok-based · onsite or remote · open to relocation</address>
                    </div>
                    <div>
                        <h4>Profiles</h4>
                        <a href="/pdf/supawithCV.pdf" download target="_blank" rel="noopener noreferrer">
                            Resume
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d={DOWNLOAD} /></svg>
                        </a>
                        {PROFILES.map((p) => (
                            <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer">
                                {p.label}
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d={ARROW} /></svg>
                            </a>
                        ))}
                    </div>
                    <div>
                        <h4>Say hi</h4>
                        {SAYHI.map((p) => (
                            <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer">
                                {p.label}
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d={ARROW} /></svg>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}