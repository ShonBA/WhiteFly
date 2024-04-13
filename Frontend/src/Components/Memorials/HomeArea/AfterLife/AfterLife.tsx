import { PersonProps } from "../../../../Models/PersonProps";
import { ProjectsCard } from "../../Common/ProjectsCard/ProjectsCard";
import "./AfterLife.scss";

export function AfterLife(props: PersonProps): JSX.Element {

    return (
        <div className="AfterLife">
            <div className="afterLifeHeader">
                <h1>החיים שאחרי</h1>
                <h5>פרויקטים לזכר הנופל שהקימו אנשים שאהבו אותו ומכבדים אותוליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק?לתיג ישבעס.</h5>
            </div>
            <div className="afterLifeCardContainer">
                {props.person?.projects.map((p, index) => <ProjectsCard key={index} description={p.description} image={p.image} title={p.title} />)}
            </div>
            <div>
                <button className="basic-btn">לכל התמונות והאלבומים</button>
            </div>
        </div>
    );
}
