import { NavLink } from "react-router-dom";
import logo from "../../../../Assets/Images/Common/black-logo.png";
import "./Navbar.scss";
import { appConfig } from "../../../../Utils/AppConfig";

export function Navbar(): JSX.Element {
    return (
        <div className="Navbar">
            <div className="navLogoContainer">
                <NavLink to={appConfig.homeRoute}>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className="navLinkContainer">
                <NavLink to={appConfig.homeRoute}>אודות</NavLink>
                <NavLink to={appConfig.rememberPagesRoute}>עמודי הנצחה</NavLink>
                <NavLink to={appConfig.ourServicesRoute}>השירות שלנו</NavLink>
                <NavLink to={appConfig.ourProductsRoute}>המוצרים שלנו</NavLink>
                <NavLink to={appConfig.contactUsRoute}>צור קשר</NavLink>
            </div>
            <div className="authLinkContainer">
                <NavLink to={appConfig.loginRoute}>התחברות</NavLink>
                <NavLink to={appConfig.registerRoute} className="joinBtn">להצטרפות</NavLink>
            </div>
        </div>
    );
}
