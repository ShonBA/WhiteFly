import { NavLink } from "react-router-dom";
import { PersonProps } from "../../../../../Models/PersonProps";
import { appConfig } from "../../../../../Utils/AppConfig";
import "./MemorialPageCard.scss";

export function MemorialPageCard(props: PersonProps): JSX.Element {
    return (
        <div className="MemorialPageCard">
            <NavLink to={appConfig.rememberRoute + props.person._id}>
                <img src={props.person?.mainImageUrl} alt={props.person?.firstName} />
                <h4>{props.person?.firstName + " " + props.person?.secName + " " + props.person?.lastName}</h4>
                <p>{props.person?.birthYear} - {props.person?.deathYear}</p>
            </NavLink>
        </div>
    );
}
