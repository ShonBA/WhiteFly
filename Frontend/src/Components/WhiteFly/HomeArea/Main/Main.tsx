import { ContactUsForm } from "../../../Memorials/Common/ContactUsForm/ContactUsForm";
import { Advantages } from "../Advantages/Advantages";
import { Home } from "../Home/Home";
import { HowItWork } from "../HowItWork/HowItWork";
import { WeAre } from "../WeAre/WeAre";
import "./Main.scss";

export function Main(): JSX.Element {
    return (
        <div className="Main">
            <Home />
            <WeAre />
            <HowItWork />
            <Advantages />
            <ContactUsForm />
        </div>
    );
}
