import { useMyContext } from "../contexts/MyContext";
import { Card } from "../components";

export function Projects() {
    const { projects } = useMyContext();

    return (
        <section className="section projects">
            <div className="projects-container container" data-size="xxl">
                {projects?.length > 0 && (
                    <div className="projects-list grid" data-columns="fill">
                        {projects.map((project) => (
                            <div key={project.id}>
                                <Card {...project} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
