import { FaChevronDown } from "react-icons/fa";
import { Obituary } from "../../../../Models/Obituaries";
import "./ObituaryCard.scss";

interface DetailCardProps {
    card: Obituary
}
export function DetailCard(props: DetailCardProps): JSX.Element {
    return (
        <div className="DetailCard">
            <div className="detailCardHeader">
                <img src={props.card.imageUrl} alt="" />
                <p>{props.card.name}</p>
                <p className="light">{props.card.relation}</p>
            </div>
            <div className="detailCardText">
                <h5>{props.card.header}</h5>
                <p>{props.card.text}</p>
            </div>
            <div>
                <FaChevronDown size={"24px"} />
            </div>
        </div>
    );
}
