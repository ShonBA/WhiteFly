import image from "../../../../Assets/Images/Memorials/candels.png";
import "./PrayOrderStatic.scss";

export function PrayOrderStatic(): JSX.Element {
    return (
        <div className="PrayOrderStatic">
            <div className="container">
                <h1>סדר תהילים ומשניות לאזכרה</h1>
                <p>תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה תפילה קבועה </p>
                <button className="basic-btn">לסדר האזכרה המלא</button>
            </div>
            <img src={image} alt="" />
        </div>
    );
}
