import { useEffect, useState } from "react";
import { Person } from "../../../../../Models/Person";
import { personService } from "../../../../../Services/PersonService";
import { MemorialPageCard } from "../../../Common/Cards/MemorialPageCard/MemorialPageCard";
import { MemorialPageHeader } from "../MemorialPageHeader/MemorialPageHeader";
import "./MemorialPageList.scss";

export function MemorialPageList(): JSX.Element {

    const [feMemorials, setFeMemorials] = useState<Person[]>([]);

    useEffect(() => {
        personService.getAllPersons()
            .then(beMemorials => setFeMemorials(beMemorials))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="MemorialPageList">
            <MemorialPageHeader />
            <div className="memorialsListContainer">
                {feMemorials.map(m => <MemorialPageCard key={m._id} person={m} />)}
            </div>
        </div>
    );
}
