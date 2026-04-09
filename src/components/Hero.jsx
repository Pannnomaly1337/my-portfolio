import { useEffect } from "react";
import { motion } from "framer-motion";
import { heroImage, heroData, heroInfo, heroSocial, heroCV } from "../lib/animations/heroReveal.js";
import { heroTextAnimation } from "../lib/animations/heroTextAnimation.js";
import Container from "../lib/Container.jsx";

export default function Hero ()
{
    useEffect(() => {
        heroTextAnimation();
    }, []);

    return (
        <div id="hero-section" className="relative pt-20 xl:min-h-screen">
            <div id="shadow-hero" className="absolute w-full h-93.75 bottom-0 md:-bottom-1 z-1 lg:h-175"></div>
            <Container className="relative pt-16">
                <motion.div {...heroData} className="xl:absolute xl:top-72 xl:left-12 xl:z-2">
                    <h3 className="text-[1.25rem] md:text-[1.75rem] lg:text-[2.25rem] xl:text-[2.5rem] font-normal text-(--first-color)">Hello, I am</h3>
                    <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">Supawith<br/>Jangtrakul</h1>
                </motion.div>
                <div className="relative grid overflow-y-clip">
                    <div id="blob-animate-hero"></div>
                    <div className="flex justify-center mt-12">
                        <motion.img {...heroImage} className="w-70 md:w-90 lg:w-120 xl:w-140 self-center" src="hero-pic.PNG" alt="profile picture" />
                    </div>
                </div>
                <motion.div {...heroInfo} className="absolute z-2 -bottom-10 md:-bottom-22  justify-self-center xl:top-72 xl:right-4">
                    <h3 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.25rem] font-normal text-(--first-color)">Creative</h3>
                    <h2 id="profession-1" className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3rem] text-center overflow-hidden relative text-(--first-color) lg:text-start">Full-Stack</h2>
                    <h2 id="profession-2" className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3rem] text-center overflow-hidden">Developer</h2>
                </motion.div>
                <motion.div {...heroSocial} className="absolute z-2 top-70 self-center flex flex-col gap-y-3 xl:-bottom-68 xl:gap-y-6">
                    <a id="social" href="https://www.facebook.com/pann.supawith.jangtrakul" target="_blank" rel="noopener noreferrer">
                        <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 19H19V5H5V19H12V14H10V12H12V10.3458C12 9.00855 12.1392 8.52362 12.4007 8.03473C12.6622 7.54584 13.0458 7.16216 13.5347 6.9007C13.9174 6.69604 14.3922 6.57252 15.2217 6.51954C15.551 6.49851 15.9771 6.52533 16.5 6.6V8.5H16C15.0827 8.5 14.7042 8.54332 14.4779 8.66433C14.3376 8.73939 14.2394 8.83758 14.1643 8.97793C14.0433 9.20418 14 9.42853 14 10.3458V12H16.5L16 14H14V19ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path></svg>
                    </a>
                    <a id="social" href="https://www.linkedin.com/in/supawith-jangtrakul-8920173a4/" target="_blank" rel="noopener noreferrer">
                        <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z"></path></svg>
                    </a>
                    <a id="social" href="https://www.fiverr.com/pannnomaly/" target="_blank" rel="noopener noreferrer">
                        <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13.6787 7.92676H12.1787C11.6216 7.92676 11.2354 8.26989 11.2354 8.78418V9.25586H16.207V17.1416H13.6787V11.3984H11.2354V17.1416H8.70703V11.3984H7.25V9.25586H8.70703V8.6123C8.70725 6.94112 9.95028 5.78418 11.793 5.78418H13.6787V7.92676Z"></path></svg>
                    </a>
                    <a id="social" href="https://github.com/Pannnomaly1337" target="_blank" rel="noopener noreferrer">
                        <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                    </a>
                </motion.div>
                <motion.div {...heroCV} id="cv" className="absolute z-2 right-0 bottom-6 md:-bottom-4 lg:bottom-0 -rotate-90 xl:rotate-0 xl:right-0 xl:bottom-22 text-light hover:text-(--first-color) font-unbounded flex items-center gap-x-2 transition duration-400 ease-in-out cursor-pointer">
                    <a className="md:text-[1.25rem] lg:text-[1.75rem]" href="/pdf/supawithCV.pdf" download target="_blank">RESUME</a>
                    <span><svg className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path></svg></span>
                </motion.div>
            </Container>
        </div>
    );
}