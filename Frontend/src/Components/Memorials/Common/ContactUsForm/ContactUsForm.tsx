import "./ContactUsForm.scss";

export function ContactUsForm(): JSX.Element {
    return (
        <div className="ContactUsForm">
            <div className="formHeader">
                <p>צריכים אתר הנצחה אישי לבן אדם נוסף?</p>
                <h5>צרו קשר איתנו ונשמח לעזור בכל מה שאפשר.</h5>
            </div>
            <div className="formContainer">
                <form>
                    <input placeholder="שם מלא" type="text" />
                    <input placeholder="טלפון" type="tel" />
                    <input placeholder="מייל" type="email" />
                    <textarea placeholder="נושא הפנייה" ></textarea>
                    <button className="basic-btn">שלחו לנו</button>
                </form>
            </div>
        </div>
    );
}
