/* eslint-disable react/prop-types */
export default function ProjectCard({ project }) {
    return (
        <article className="card">
            <div className="card-media">
                <span className="card-cat">{project.tag}</span>
                <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="card-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="card-tech">{project.tech.join(" · ")}</div>
                <div className="card-links">
                    {project.live && (
                        <a className="lnk live" href={project.live} target="_blank" rel="noopener noreferrer">Live demo</a>
                    )}
                    <a className="lnk code" href={project.repo} target="_blank" rel="noopener noreferrer">Code</a>
                </div>
            </div>
        </article>
    );
}
