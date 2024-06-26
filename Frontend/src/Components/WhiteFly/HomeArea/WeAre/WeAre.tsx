import bigFly from "../../../../Assets/Images/WhiteFly/big-fly.png";
import smallFly from "../../../../Assets/Images/WhiteFly/small-fly.png";
import "./WeAre.scss";

export function WeAre(): JSX.Element {
    return (
        <div className="WeAre">
            <div className="weAreTextContainer">
                <h1>פרפר לבן זה אנחנו</h1>
                <p>
                    אנו מאמינים שכל חיים ראויים להיחגג ולהיזכר. אנו מספקים פלטפורמה שבה משפחות וחברים יכולים ליצור אתרי זיכרון מותאמים אישית כדי לכבד את יקיריהם שהלכו לעולמם, תוך שמירה על מורשתם לדורות הבאים.
                </p>
                <p>
                    הפלטפורמה שלנו מאפשרת לקרובים להוסיף הספדים ומכתבים לזכרם, לשתף את הזיכרונות היקרים שלהם. בנוסף, משתמשים יכולים ליצור גלריות תמונות, להעלות סרטונים ולשתף סיפורים.
                    החברה מספקת שמירה על החומרים בענן לכל החיים עבור אתרי זיכרון,  מה שמבטיח שהמחווה תישאר נגישה ללא הגבלת זמן. זה מבטל את הדאגה של שמירה על מנויים או איבוד גישה לאנדרטה לאורך זמן.
                    זיכרון נצח מציע סיוע מקצועי ביצירה וניהול של אתרי זיכרון. הצוות שלהם מספק הדרכה ותמיכה בכל שלב בדרך, ומבטיח שהמחווה משקפת במדויק את חייו ואישיותו של האדם שנפטר.
                </p>
            </div>
            <div className="weAreImageContainer">
                <img src={smallFly} className="smallFly"/>
                <img src={bigFly} />
            </div>
        </div>
    );
}
