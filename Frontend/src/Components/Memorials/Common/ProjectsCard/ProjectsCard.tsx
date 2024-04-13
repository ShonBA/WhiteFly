import { FaChevronDown } from "react-icons/fa";
import "./ProjectsCard.scss";
import { Project } from "../../../../Models/Project";

interface ProjectsCardProps {
    project: Project
}
export function ProjectsCard(props: ProjectsCardProps): JSX.Element {
    return (
        <div className="ProjectsCard">
            <div>
                <img src={props.project?.imageUrl} />
                <hr />
                <h3>{props.project.title}</h3>
                <p>{props.project?.description}</p>
                <FaChevronDown />
            </div>
        </div>
    );
}
