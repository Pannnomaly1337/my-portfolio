import { currentYear } from "@/lib/data/footerYear.js";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <a href="#hero" className="brand">Supa<span>with</span></a>
                <div className="yr">© 2025 – {currentYear} · Supawith Jangtrakul · Built with React + Vite</div>
            </div>
        </footer>
    );
}
