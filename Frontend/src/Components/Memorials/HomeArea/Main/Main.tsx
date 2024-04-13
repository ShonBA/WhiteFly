import personData from "../../../../Assets/JSON/data.json";
import { Person } from "../../../../Models/Person";
import { ContactUsForm } from "../../Common/ContactUsForm/ContactUsForm";
import { AfterLife } from "../AfterLife/AfterLife";
import { Gallery } from "../Gallery/Gallery";
import { Home } from "../Home/Home";
import { LifeStory } from "../LifeStory/LifeStory";
import { Obituaries } from "../Obituaries/Obituaries";
import { PrayOrder } from "../PrayOrder/PrayOrder";
import "./Main.scss";

export function Main(): JSX.Element {
    const persons: Person[] = personData;
    const person = persons[0];

    return (
        <div className="Main">
            <Home person={person} />
            <LifeStory person={person} />
            <Gallery />
            <Obituaries />
            <PrayOrder />
            <AfterLife />
            <PrayOrder />
            <ContactUsForm />
        </div>
    );
}
