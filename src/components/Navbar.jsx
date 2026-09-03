import { useEffect, useState } from "react";

const LINKS = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#journey", label: "Journey" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // scroll progress bar
        const onScroll = () => {
            const h = document.documentElement;
            const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
            const bar = document.getElementById("progress");
            if (bar) bar.style.width = pct + "%";
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        // active nav highlight
        const ids = ["about", "work", "skills", "journey", "contact"];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        document.querySelectorAll(".nav-link").forEach((l) =>
                            l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
                        );
                    }
                });
            },
                { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div id="progress"></div>
            <header className="nav">
                <div className="container">
                    <a href="#hero" className="brand">Supa<span>with</span></a>

                    <nav className={`nav-links ${open ? "open" : ""}`}>
                        {LINKS.map((l) => (
                            <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <a href="#contact" className="nav-cta">Get in touch</a>

                    <button className="burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h18v2H3zM3 11h18v2H3zM3 18h18v2H3z" /></svg>
                    </button>
                </div>
            </header>
        </>
    );
}
