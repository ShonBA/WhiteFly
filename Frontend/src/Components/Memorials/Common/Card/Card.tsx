import { CardModel } from "../../../../Models/CardModel";
import { FaChevronDown } from "react-icons/fa";
import "./Card.scss";

interface CardProps {
    card: CardModel;
    withHeader: boolean
}

export function Card(props: CardProps): JSX.Element {
    return (
        <div className="Card">
            {props.withHeader ?
                <div>
                    <img src={props.card?.image} />
                    <hr />
                    <h3>{props.card.header}</h3>
                    <p>{props.card?.text}</p>
                    <FaChevronDown />
                </div>
                :
                <div>
                    <img src={props.card?.image} />
                    <hr />
                    <p>{props.card?.text}</p>
                </div>
            }
        </div>
    );
}
