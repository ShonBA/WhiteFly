import { NavLink, useNavigate, useParams } from "react-router-dom";
import logo from "../../../../Assets/Images/Common/white-logo.png";
import "./RememberNavbar.scss";
import { appConfig } from "../../../../Utils/AppConfig";

export function RememberNavbar(): JSX.Element {
    const _id = useParams()._id;

    return (
        <div className="RememberNavbar">
            <div className="navLinkContainer">
                <NavLink to={appConfig.rememberRoute + _id} end>סיפור חיי</NavLink>
                <NavLink to={appConfig.rememberRoute + _id + appConfig.galleryRoute}>גלריה</NavLink>
                <NavLink to={appConfig.rememberRoute + _id + appConfig.obituariesRoute}>הספדים</NavLink>
                <NavLink to={appConfig.rememberRoute + _id + appConfig.lifeAfterRoute}>החיים שאחרי</NavLink>
                <NavLink to={appConfig.rememberRoute + _id + appConfig.prayBookRoute}>ספר לאזכרה</NavLink>
                <NavLink to={appConfig.rememberRoute + _id + appConfig.toRememberRoute}>תהילים לעילוי נשמת</NavLink>
            </div>
            <div className="navLogoContainer">
                <NavLink to={appConfig.homeRoute}>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
        </div>
    );
}
