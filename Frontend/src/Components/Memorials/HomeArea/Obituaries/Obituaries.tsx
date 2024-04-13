import { PersonProps } from "../../../../Models/PersonProps";
import { DetailCard } from "../../Common/ObituaryCard/ObituaryCard";
import "./Obituaries.scss";

export function Obituaries(props:PersonProps): JSX.Element {

    return (
        <div className="Obituaries">
            <h1>הספדים</h1>
            <div className="detailCardContainer">
                {props.person?.obituaries.map((o,index) => <DetailCard key={index} card={o} />)}
            </div>
            <button className="basic-btn">לכל התמונות והאלבומים</button>
        </div>
    );
}
