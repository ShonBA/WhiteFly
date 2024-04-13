import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../../../Assets/Images/Common/black-logo.png";
import "./Footer.scss";


export function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div className="socialIconsContainer">
                <hr />
                <FaInstagram size={"24px"} />
                <FaFacebookF size={"24px"} />
                <FaWhatsapp size={"24px"} />
            </div>
            <div className="iconContainer">
                <img src={logo} alt="" />
            </div>
            <div className="detailsContainer">
                <span>Parpar.lavan@gmail.com</span>
                <span> | </span>
                <span>parpar-lavan.co.il</span>
                <span> | </span>
                <span>הזמר 10, הרצליה</span>
                <span> | </span>
                <span>054-6959537</span>
            </div>
            <div className="cpContainer">
                <span>הצהרת נגישות | הסכם תנאים ופרטיות | תנאי שימוש | צור קשר </span>
                <span>האתר הוקם ע”י  Studio Splend</span>
            </div>
        </div>
    );
}
