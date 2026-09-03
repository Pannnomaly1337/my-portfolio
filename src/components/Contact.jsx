import { useState } from "react";
import { motion } from "framer-motion";
import { reveal } from "@/lib/reveal.js";

const EMAIL = "s.jangtrakul@gmail.com";
const ARROW = "M5.63 19.78 4.22 18.36 15.66 6.93H10.07v-2h9v9h-2V8.34z";

const PROFILES = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/supawith-jangtrakul-8920173a4/" },
    { label: "GitHub", href: "https://github.com/Pannnomaly1337" },
    { label: "JobsDB", href: "https://th.jobsdb.com/th/profiles/ศุภวิชญ์-จังตระกูล-lLPkHHNVJW" },
];
const SAYHI = [
    { label: "Facebook", href: "https://www.facebook.com/pann.supawith.jangtrakul" },
    { label: "Fiverr", href: "https://www.fiverr.com/pannnomaly/" },
];

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(EMAIL).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <section id="contact" className="section">
            <div className="blob"></div>
            <div className="container">
                <motion.div {...reveal}>
                    <h2>Let&apos;s build something.</h2>
                    <p className="lead">Open to full-stack developer roles — let&apos;s connect.</p>
                    <button className="btn copy-btn" onClick={copy}>
                        <span>{copied ? "Email copied ✓" : "Copy email"}</span>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3zm2 0h6v10h2V4H9v2z" /></svg>
                    </button>
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
