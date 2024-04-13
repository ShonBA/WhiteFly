import logo from "../../../../Assets/Images/Common/black-logo.png";
import "./Navbar.scss";

export function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <div className="navLogoContainer">
                <img src={logo} alt="logo" />
            </div>
            <div className="navLinkContainer">
                <a href="">סיפור חיי</a>
                <a href="">גלריה</a>
                <a href="">הספדים</a>
                <a href="">החיים שאחרי</a>
                <a href="">ספר לאזכרה</a>
                <a href="">תהילים לעילוי נשמת</a>
            </div>
            <div className="authLinkContainer">
                <a href="">התחברות</a>
                <a href="" className="joinBtn">להצטרפות</a>
            </div>
        </div>
    );
}
