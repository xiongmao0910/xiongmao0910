import { HiCode } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

export function Card({ title, description, technologies, github }) {
    return (
        <div className="card">
            <div className="card-header flex justify-between items-center">
                <div className="fs-200 text-primary-500 capitalize fw-medium">
                    featured project
                </div>
                <a
                    href={github}
                    target="_blank"
                    className="card-icon inline-block"
                >
                    <FiGithub />
                </a>
            </div>
            <div className="card-content">
                <div className="card-title fs-400 fw-bold capitalize">
                    {title}
                </div>
                <p className="card-desc fs-200">{description}</p>
            </div>
            <div className="card-footer">
                <div className="card-list flex items-center flex-wrap">
                    {technologies.map((tech) => (
                        <div key={tech} className="fs-200">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
