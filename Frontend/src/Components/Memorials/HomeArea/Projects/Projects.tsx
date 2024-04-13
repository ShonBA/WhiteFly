import { PersonProps } from "../../../../Models/PersonProps";
import { ProjectsCard } from "../../Common/ProjectsCard/ProjectsCard";
import "./Projects.scss";

export function Projects(props: PersonProps): JSX.Element {
console.log(props.person.projects);

    return (
        <div className="Projects">
            <div className="projectsHeader">
                <h1>החיים שאחרי</h1>
                <h5>פרויקטים לזכר הנופל שהקימו אנשים שאהבו אותו ומכבדים אותוליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק?לתיג ישבעס.</h5>
            </div>
            <div className="projectsCardContainer">
                {props.person?.projects.map((p, index) => <ProjectsCard key={index} project={p} />)}
            </div>
            <div>
                <button className="basic-btn">לכל התמונות והאלבומים</button>
            </div>
        </div>
    );
}
