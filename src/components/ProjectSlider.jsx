import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { projects } from "../lib/data/projects.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const STATUS_STYLES = {
    "In progress": "text-amber-400 border-amber-400",
    "Completed": "text-emerald-400 border-emerald-400",
    "Archived": "text-neutral-400 border-neutral-500",
    "Demo offline": "text-neutral-400 border-neutral-500",
};

export default function ProjectSlider() {
  return (
    <div className="project-slider-wrapper">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            autoHeight={false}
            slidesPerGroup={1}
            centeredSlides={true}
            grabCursor
            speed={600}
            watchSlidesProgress
            resistanceRatio={0.85}
            navigation
            pagination={{
                clickable: true,
                el: ".custom-pagination",
            }}
            autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            }}
            breakpoints={{
                768: {},
            }}
            className="project-swiper w-full"
        >
            {projects.map((project) => {
                const status = project.status ?? "Completed";
                const statusClass = STATUS_STYLES[status] ?? "text-(--first-color) border-(--first-color)";

                return (
                <SwiperSlide key={project.id} className="w-full md:!w-[450px] lg:!w-[550px] !h-auto">
                    <article className="relative bg-(--container-color) p-6 rounded-[3rem] overflow-hidden px-7 md:p-9 lg:p-10 lg:rounded-[4rem] flex flex-col w-full">
                        <div id="blob-animate-project"></div>

                        <div className="relative z-10 flex items-center justify-between">
                            <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem]">{project.number}</h1>
                            <h3 className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] font-normal">{project.category}</h3>
                        </div>

                        <div className="relative z-10 my-8">
                            <div className="flex items-center flex-wrap gap-x-3 gap-y-2 mb-4">
                                <h1 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem]">{project.title}</h1>
                                <span className={`font-unbounded text-[0.8rem] md:text-[0.9rem] rounded-[4rem] px-3 py-1 border ${statusClass}`}>{status}</span>
                            </div>
                            {project.description && (
                                <p className="text-(--text-color) text-[1.15rem] md:text-[1.35rem] leading-relaxed mb-5">{project.description}</p>
                            )}
                            <p className="font-unbounded text-[1.25rem] md:text-[1.5rem] mb-2">Technologies used</p>
                            <p className="text-shadow-lg text-[1.25rem] md:text-[1.5rem]">{project.tech.join(", ")}</p>
                        </div>

                        <div id="project-image" className="relative z-10 aspect-video overflow-hidden">
                            <img className="w-full h-full object-fill rounded-3xl lg:rounded-4xl" src={project.image} alt={project.title} />
                        </div>

                        <div className="relative z-10 mt-6 flex gap-3 md:gap-4">
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex flex-1 justify-center items-center gap-x-2 bg-(--first-color) text-(--body-color) py-3 px-6 rounded-[4rem] font-unbounded text-[1rem] md:text-[1.25rem] transition duration-300 hover:opacity-90">
                                    <span>Live Demo</span>
                                    <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path></svg>
                                </a>
                            )}
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex flex-1 justify-center items-center gap-x-2 border-2 [border-color:var(--title-color)] text-(--title-color) py-3 px-6 rounded-[4rem] font-unbounded text-[1rem] md:text-[1.25rem] transition-all duration-400 ease-in-out hover:[border-color:var(--first-color)] hover:text-(--first-color)">
                                <span>Code</span>
                                <svg className="w-5 h-5 md:w-6 md:h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z"></path></svg>
                            </a>
                        </div>
                    </article>
                </SwiperSlide>
                );
            })}
        </Swiper>
        <div className="custom-pagination mt-6 flex justify-center lg:pt-8"></div>
    </div>
  );
}