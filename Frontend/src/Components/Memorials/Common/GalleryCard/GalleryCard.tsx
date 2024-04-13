import "./GalleryCard.scss";

interface GalleryCardProps {
    imageUrl: string;
    text: string;
}
export function GalleryCard(props: GalleryCardProps): JSX.Element {
    return (
        <div className="GalleryCard">
            <div>
                <img src={props.imageUrl} />
                <hr />
                <p>{props.text}</p>
            </div>
        </div>
    );
}
