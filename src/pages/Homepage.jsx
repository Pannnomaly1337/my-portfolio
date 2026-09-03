import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";
import Skills from "@/components/Skills.jsx";
import Journey from "@/components/Journey.jsx";
import Testimonial from "@/components/Testimonial.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";

export default function Homepage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Journey />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
}
