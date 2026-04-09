import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { motion } from "framer-motion";
import { contactHeroReveal, contactInfoReveal } from "../lib/animations/contactReveal.js";
import Container from "../lib/Container.jsx";

export default function Contact ()
{
    const [copied, setCopied] = useState(false);

    return (
        <div id="contact-section" className="pt-20 xl:min-h-screen lg:pt-36">
            <Container>
                <div className="grid gap-y-16 pb-8 lg:gap-y-32">
                    <motion.div {...contactHeroReveal} className="text-center">
                        <h2 className="mb-10 text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">Contact Me</h2>

                        <p className="font-unbounded mb-8 text-[1.25rem] md:text-[1.5rem]">
                            Tell me about your next project.
                        </p>

                        <CopyToClipboard text="s.jangtrakul@gmail.com" onCopy={() => {setCopied(true); setTimeout(() => setCopied(false), 2000);}}>
                            <button id="button-cv" className="cursor-pointer bg-(--body-color) text-(--title-color) py-4 px-8 rounded-[4rem] font-unbounded inline-flex items-center gap-x-2">
                                <span className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] transition duration-400 ease-in-out">{copied ? "Email copied" : "Copy Email"}</span>
                                <span>{copied ? (<svg className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal transition duration-400 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>) : (<svg className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal transition duration-400 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>)}</span>
                            </button>
                        </CopyToClipboard>
                    </motion.div>

                    <motion.div {...contactInfoReveal} id="contact-card" className="grid gap-y-12">
                        <div className="gap-y-4 lg:justify-self-start lg:gap-y-6">
                            <div className="mb-4">
                                <h3 className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] text-(--first-color) text-center mb-2 lg:mb-3">Email</h3>
                                <address className="text-(--title-color) not-italic font-medium text-center text-[1.25rem] md:text-[1.5rem]">s.jangtrakul@gmail.com</address>
                            </div>

                            <div>
                                <h3 className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] text-(--first-color) text-center mb-2 lg:mb-3">Location</h3>
                                <address className="text-(--title-color) not-italic font-medium text-center text-[1.25rem] md:text-[1.5rem]">Bangkok, Thailand</address>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] text-(--first-color) text-center mb-2 lg:mb-3">Social Media</h3>

                            <div className="grid grid-cols-[max-content] justify-center gap-y-1">
                                <a id="contact-link" className="flex items-center text-[1.25rem] md:text-[1.5rem] text-(--title-color) font-medium justify-between gap-x-2 lg:gap-x-4" href="https://www.linkedin.com/in/supawith-jangtrakul-8920173a4/" target="_blank" rel="noopener noreferrer">
                                    <span>LinkedIn</span>
                                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path></svg>
                                </a>

                                <a id="contact-link" className="flex items-center text-[1.25rem] md:text-[1.5rem] text-(--title-color) font-medium justify-between gap-x-2 lg:gap-x-4" href="https://th.jobsdb.com/th/profiles/ศุภวิชญ์-จังตระกูล-lLPkHHNVJW" target="_blank" rel="noopener noreferrer">
                                    <span>Jobsdb</span>
                                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path></svg>
                                </a>
                                    
                                <a id="contact-link" className="flex items-center text-[1.25rem] md:text-[1.5rem] text-(--title-color) font-medium justify-between gap-x-2 lg:gap-x-4" href="https://www.fiverr.com/pannnomaly/" target="_blank" rel="noopener noreferrer">
                                    <span>Fiverr</span>
                                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path></svg>
                                </a>

                                <a id="contact-link" className="flex items-center text-[1.25rem] md:text-[1.5rem] text-(--title-color) font-medium justify-between gap-x-2 lg:gap-x-4" href="/tbc" target="_blank">
                                    <span>Etsy</span>
                                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path></svg>
                                </a>

                                <a id="contact-link" className="flex items-center text-[1.25rem] md:text-[1.5rem] text-(--title-color) font-medium justify-between gap-x-2 lg:gap-x-4" href="https://github.com/Pannnomaly1337" target="_blank" rel="noopener noreferrer">
                                    <span>GitHub</span>
                                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path></svg>
                                </a>
                            </div>
                        </div>

                        <div className="lg:justify-self-end">
                            <h3 className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] text-(--first-color) text-center mb-2 lg:mb-3">Write Me & We will Talk</h3>

                            <div className="grid grid-cols-[max-content] justify-center gap-y-1">
                                <a id="contact-link" className="flex items-center text-[1.25rem] md:text-[1.5rem] text-(--title-color) font-medium justify-between gap-x-2 lg:gap-x-4" href="https://www.facebook.com/pann.supawith.jangtrakul" target="_blank" rel="noopener noreferrer">
                                    <span>Facebook</span>
                                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path></svg>
                                </a>

                                <a id="contact-link" className="flex items-center text-[1.25rem] md:text-[1.5rem] text-(--title-color) font-medium justify-between gap-x-2 lg:gap-x-4" href="/tbc" target="_blank">
                                    <span>Instagram</span>
                                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path></svg>
                                </a>

                                <a id="contact-link" className="flex items-center text-[1.25rem] md:text-[1.5rem] text-(--title-color) font-medium justify-between gap-x-2 lg:gap-x-4" href="/tbc" target="_blank">
                                    <span>Steam</span>
                                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 shrink-0 font-normal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}