import icon from "../../../../Assets/Images/Common/scroll-down.png";
import { PersonProps } from "../../../../Models/PersonProps";
import "./Home.scss";

export function Home(props: PersonProps): JSX.Element {
    return (
        <div className="RememberHome" style={{ backgroundImage: `url("${props.person?.mainImageUrl}")` }}>
            <div className="homeHeaders">
                <h2>{props.person?.firstName} {props.person?.secName} {props.person?.lastName}</h2>
                <p className="firstP">חייה בן השנים {props.person?.birthYear} - {props.person?.deathYear}</p>
                <p>האזכרה הבאה תהיה בתאריך:</p>
                <h4>{props.person?.nextMemory}</h4>
                <img src={icon} alt="icon" />
            </div>
        </div>
    );
}
