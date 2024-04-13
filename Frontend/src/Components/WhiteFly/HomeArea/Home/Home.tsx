import img from "../../../../Assets/Images/WhiteFly/home-botton-image.png"
import "./Home.scss";

export function Home(): JSX.Element {
    return (
        <div className="Home">
            <div className="homeContainer">
                <div className="textContainer">
                    <h1>אתר הנצחה אישי לזכר האנשים שכבר אינם</h1>
                    <p>ליצור הנצחה תמידית ברגע אחד.
                        אתר המכיל את סיפור חייהם, כל האלבומים, ההספדים, סידור האזכרה, הפרוייקטים למענם וכל מה שעושים למענם.
                        כל אתר מותאם אישית כדי לתת כבוד לכל אחד ואחת.
                        רוצים לדעת איך זה עובד?
                    </p>
                    <button className="basic-btn">להקמת אתר הנצחה</button>
                </div>
                <div className="imageContainer">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}
