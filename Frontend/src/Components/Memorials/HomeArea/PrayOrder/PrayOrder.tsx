import "./PrayOrder.scss";
import image from "../../../../Assets/Images/Memorials/book.png"
import { PersonProps } from "../../../../Models/PersonProps";

export function PrayOrder(props: PersonProps): JSX.Element {
    return (
        <div className="PrayOrder">
            <div className="container">
                <h1>סדר תהילים ומשניות לאזכרה</h1>
                <p>{props.person?.pray}</p>
                <button className="basic-btn">לסדר האזכרה המלא</button>
            </div>
            <img src={image} alt="" />
        </div>
    );
}
