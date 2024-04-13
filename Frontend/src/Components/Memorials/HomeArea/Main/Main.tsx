import { useParams } from "react-router-dom";
import personData from "../../../../Assets/JSON/data.json";
import { Person } from "../../../../Models/Person";
import { ContactUsForm } from "../../Common/ContactUsForm/ContactUsForm";
import { Projects } from "../Projects/Projects";
import { Gallery } from "../Gallery/Gallery";
import { Home } from "../Home/Home";
import { LifeStory } from "../LifeStory/LifeStory";
import { Obituaries } from "../Obituaries/Obituaries";
import { PrayOrder } from "../PrayOrder/PrayOrder";
import "./Main.scss";
import { useEffect, useState } from "react";
import { personService } from "../../../../Services/PersonService";
import { PrayOrderStatic } from "../PrayOrderStatic/PrayOrderStatic";

export function Main(): JSX.Element {
    const params = useParams();
    const _id = params._id;

    const [fePerson, setFePerson] = useState<Person>();

    useEffect(() => {
        personService.getPersonById(_id)
            .then(bePerson => setFePerson(bePerson))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="Main">
            <Home person={fePerson} />
            <LifeStory person={fePerson} />
            <Gallery person={fePerson} />
            <Obituaries person={fePerson} />
            <PrayOrder person={fePerson} />
            <Projects person={fePerson} />
            <PrayOrderStatic />
            <ContactUsForm />
        </div>
    );
}
