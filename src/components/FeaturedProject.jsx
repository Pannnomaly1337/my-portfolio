/* eslint-disable react/prop-types */
const STATUS_PILL = {
    "In progress": "progress",
    "Completed": "completed",
};

export default function FeaturedProject({ project }) {
    const pill = STATUS_PILL[project.status] ?? "";

    return (
        <div className="featured">
            <div className="blob"></div>
            <div className="featured-body">
                <span className="featured-flag">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01z" /></svg>
                    Featured project
                </span>
                <h3>
                    {project.title}
                    {project.status && <span className={`pill ${pill}`}>{project.status}</span>}
                </h3>
                <p className="featured-cat">{project.category}</p>
                <p className="lead">{project.description}</p>
                <div className="tech-row">
                    {project.tech.map((t) => (
                        <span className="tech" key={t}>{t}</span>
                    ))}
                </div>
                <div className="featured-actions">
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                            Live demo
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.63 19.78 4.22 18.36 15.66 6.93H10.07v-2h9v9h-2V8.34z" /></svg>
                        </a>
                    )}
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className={`btn btn-sm ${project.live ? "btn-ghost" : "btn-primary"}`}>
                        View code
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.57.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" /></svg>
                    </a>
                </div>
            </div>
            <div className="featured-media">
                <img src={project.image} alt={project.title} />
            </div>
        </div>
    );
}
