import "./MemorialPageHeader.scss";

export function MemorialPageHeader(): JSX.Element {
    return (
        <div className="MemorialPageHeader">
            <div className="headerBg"></div>
            <h3>עמודי ההנצחה שלנו</h3>
            <p>
                אתרי זיכרון שנוצרו מספקים מחווה מתמשכת וירוק עד שניתן לבקר ולהוקיר עד אין קץ.
                <br />  בסך הכל, זיכרון נצח מציע שירות חמלה ומקצועי המעצים משפחות וחברים ליצור מחווה יפה ומתמשכת ליקיריהם שהלכו לעולמם.
                <br /> באמצעות אתרי זיכרון מותאמים אישית, הם עוזרים לשמור על זיכרונות בחיים.
            </p>

            <div className="searchContainer">
                <input type="text" placeholder="חיפוש לפי שם" />
            </div>

        </div>
    );
}
