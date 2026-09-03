import { motion } from "framer-motion";

const STATS = [
    { num: "8", lbl: "Projects built" },
    { num: "25+", lbl: "Technologies" },
    { num: "1", lbl: "Production PMS" },
    { num: "5.0★", lbl: "Mentor reviews" },
];

const SOCIALS = [
    { href: "https://github.com/Pannnomaly1337", label: "GitHub", path: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.57.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" },
    { href: "https://www.linkedin.com/in/supawith-jangtrakul-8920173a4/", label: "LinkedIn", path: "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2.5 4A1.5 1.5 0 1 1 9 7.5 1.5 1.5 0 0 1 7.5 9zM6.5 10h2v7.5h-2zm5.5.43c.58-.57 1.27-.93 2-.93 2.07 0 3.5 1.68 3.5 3.75v4.25h-2v-4.25c0-.97-.78-1.75-1.75-1.75s-1.75.78-1.75 1.75v4.25h-2V10h2z" },
    { href: "https://www.facebook.com/pann.supawith.jangtrakul", label: "Facebook", path: "M14 19h5V5H5v14h7v-5h-2v-2h2v-1.65c0-1.34.14-1.82.4-2.31a2.72 2.72 0 0 1 1.13-1.14c.39-.2.86-.32 1.69-.38.33-.02.76.01 1.28.08V8.5h-.5c-.92 0-1.3.04-1.52.16a.98.98 0 0 0-.29.32c-.12.22-.16.45-.16 1.37V12h2.5l-.5 2H14v5z" },
    { href: "https://www.fiverr.com/pannnomaly/", label: "Fiverr", path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm1.68 3.93h-1.5c-.56 0-.94.34-.94.86v.47h4.97v7.88h-2.53v-5.74h-2.44v5.74H8.71v-5.74H7.25V9.26h1.46v-.64c0-1.67 1.24-2.83 3.09-2.83h1.88v2.14z" },
];

export default function Hero() {
    return (
        <section id="hero">
            <div className="container hero-grid">
                <motion.div
                    className="hero-copy"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <span className="status"><span className="dot"></span>Open to full-stack developer roles</span>
                    <p className="eyebrow">Hello, I&apos;m Supawith Jangtrakul</p>
                    <h1>I build full-stack<br />web apps, end to end.</h1>
                    <p className="hero-lead">
                        A <b>Junior Full-Stack Developer</b> who turns ideas into working products — from database schema and API to a polished, responsive UI. Career-changer from biology, now shipping production-grade software.
                    </p>
                    <div className="hero-actions">
                        <a href="#work" className="btn btn-primary">
                            View my work
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.63 19.78 4.22 18.36 15.66 6.93H10.07v-2h9v9h-2V8.34z" /></svg>
                        </a>
                        <a href="/pdf/supawithCV.pdf" download target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                            Download résumé
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 8v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h11l6 6zm-2 1h-5V4H5v16h14V9z" /></svg>
                        </a>
                    </div>
                    <div className="hero-stats">
                        {STATS.map((s) => (
                            <div className="stat" key={s.lbl}>
                                <div className="num">{s.num}</div>
                                <div className="lbl">{s.lbl}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                >
                    <div className="blob"></div>
                    <div className="hero-social">
                        {SOCIALS.map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                            </a>
                        ))}
                    </div>
                    <div className="hero-portrait">
                        <img src="/hero-pic.PNG" alt="Supawith Jangtrakul" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
