import { FaChevronDown } from "react-icons/fa";
import "./ProjectsCard.scss";

interface ProjectsCardProps {
    title: string;
    description: string;
    image: string;
}
export function ProjectsCard(props: ProjectsCardProps): JSX.Element {
    return (
        <div className="ProjectsCard">
            <div>
                <img src={props?.image} />
                <hr />
                <h3>{props.title}</h3>
                <p>{props?.description}</p>
                <FaChevronDown />
            </div>
        </div>
    );
}
