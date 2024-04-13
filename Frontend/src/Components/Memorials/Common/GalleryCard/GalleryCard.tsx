import "./GalleryCard.scss";

interface GalleryCardProps {
    image: string;
    text: string;
}
export function GalleryCard(props: GalleryCardProps): JSX.Element {
    return (
        <div className="GalleryCard">
            <div>
                <img src={props.image} />
                <hr />
                <p>{props.text}</p>
            </div>
        </div>
    );
}
