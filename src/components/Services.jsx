import { motion } from "framer-motion";
import { servicesTitleReveal, servicesCardsReveal } from "@/lib/animations/servicesReveal.js";
import Container from "@/lib/Container.jsx";
import Developer from "./Developer.jsx";
import Design from "./Design.jsx";

export default function Services ()
{
    return (
        <div className="pt-20 xl:min-h-screen md:pt-36 md:pb-16">
            <Container>
                <motion.h2 {...servicesTitleReveal} className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">
                    What I <span className="text-(--first-color)">Can Do</span>
                </motion.h2>

                <motion.div {...servicesCardsReveal} id="service-card" className="flex flex-col lg:grid lg:items-start gap-y-4 mt-16 mb-10 lg:mt-20 lg:mb-14 xl:mt-22 xl:mb-18">
                    <Developer />
                    <Design />
                </motion.div>
            </Container>
        </div>
    );
}