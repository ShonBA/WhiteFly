import "./AfterLife.scss";
import image1 from "../../../../Assets/Images/Memorials/galley-image1.jpg"
import image2 from "../../../../Assets/Images/Memorials/galley-image2.jpg"
import image3 from "../../../../Assets/Images/Memorials/galley-image3.jpg"
import image4 from "../../../../Assets/Images/Memorials/galley-image4.jpg"
import { Card } from "../../Common/Card/Card";


export function AfterLife(): JSX.Element {
    const data = [
        {
            id: 1,
            image: image1,
            header: "מרוץ החיים",
            text: "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי."
        },
        {
            id: 2,
            image: image2,
            header: "מרוץ החיים",
            text: "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי."
        },
        {
            id: 3,
            image: image3,
            header: "מרוץ החיים",
            text: "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי."
        },
        {
            id: 4,
            image: image4,
            header: "מרוץ החיים",
            text: "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי."
        }
    ]
    return (
        <div className="AfterLife">
            <div className="afterLifeHeader">
                <h1>החיים שאחרי</h1>
                <h5>פרויקטים לזכר הנופל שהקימו אנשים שאהבו אותו ומכבדים אותוליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק?לתיג ישבעס.</h5>
            </div>
            <div className="afterLifeCardContainer">
                {data.map(d => <Card key={d.id} card={d} withHeader />)}
            </div>
            <div>
                <button className="basic-btn">לכל התמונות והאלבומים</button>
            </div>
        </div>
    );
}
