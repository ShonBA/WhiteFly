import image1 from "../../../../Assets/Images/Memorials/galley-image1.jpg";
import image2 from "../../../../Assets/Images/Memorials/galley-image2.jpg";
import image3 from "../../../../Assets/Images/Memorials/galley-image3.jpg";
import image4 from "../../../../Assets/Images/Memorials/galley-image4.jpg";
import { Card } from "../../Common/Card/Card";
import "./Gallery.scss";

export function Gallery(): JSX.Element {

    const data = [
        {
            id: 1,
            image: image1,
            header: "",
            text: "החיים שבחוץ"
        },
        {
            id: 2,
            image: image2,
            header: "",
            text: "מהתקופה האחרונה"
        },
        {
            id: 3,
            image: image3,
            header: "",
            text: "אלבום ילדות"
        },
        {
            id: 4,
            image: image4,
            header: "",
            text: "אלבום החיים בכפר"
        }
    ]
    return (
        <div className="Gallery">
            <h2>גלריה</h2>
            <div className="cardsContainer">
                {data.map(d => <Card key={d.id} card={d} withHeader={false} />)}
            </div>
            <button className="basic-btn">לכל התמונות והאלבומים</button>
        </div>
    );
}
