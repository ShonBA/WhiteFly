import { NavLink } from "react-router-dom";
import logo from "../../../../Assets/Images/Common/white-logo.png";
import "./RememberNavbar.scss";
import { appConfig } from "../../../../Utils/AppConfig";

export function RememberNavbar(): JSX.Element {
    return (
        <div className="RememberNavbar">
            <div className="navLinkContainer">
                <a href="">סיפור חיי</a>
                <a href="">גלריה</a>
                <a href="">הספדים</a>
                <a href="">החיים שאחרי</a>
                <a href="">ספר לאזכרה</a>
                <a href="">תהילים לעילוי נשמת</a>
            </div>
            <div className="navLogoContainer">
                <NavLink to={appConfig.HomeRoute}>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
        </div>
    );
}
