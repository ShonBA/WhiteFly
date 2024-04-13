import { FaChevronDown } from "react-icons/fa";
import { DetailCardModel } from "../../../../Models/DetailCardModel";
import "./DetailCard.scss";

interface DetailCardProps {
    card: DetailCardModel
}
export function DetailCard(props: DetailCardProps): JSX.Element {
    return (
        <div className="DetailCard">
            <div className="detailCardHeader">
                <img src={props.card.image} alt="" />
                <p>{props.card.name}</p>
                <p className="light">{props.card.relation}</p>
            </div>
            <div className="detailCardText">
                <h5>{props.card.header}</h5>
                <p>{props.card.description}</p>
            </div>
            <div>
                <FaChevronDown size={"24px"} />
            </div>
        </div>
    );
}
