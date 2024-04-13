import { PersonProps } from "../../../../Models/PersonProps";
import { GalleryCard } from "../../Common/GalleryCard/GalleryCard";
import "./Gallery.scss";

export function Gallery(props: PersonProps): JSX.Element {

    return (
        <div className="Gallery">
            <h2>גלריה</h2>
            <div className="cardsContainer">
                {props.person?.gallery.map((g, index) => <GalleryCard key={index} image={g.albumImageUrl} text={g.description} />)}
            </div>
            <button className="basic-btn">לכל התמונות והאלבומים</button>
        </div>
    );
}
