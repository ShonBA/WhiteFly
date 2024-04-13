import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { Person } from "../Models/Person";

class PersonService {
    public async getAllPersons(): Promise<Person[]> {
        const response = await axios.get<Person[]>(appConfig.PersonsUrl)
        const persons = response.data;
        return persons
    }
    
    public async getPersonById(_id: string): Promise<Person> {
        const response = await axios.get<Person>(appConfig.PersonsUrl + _id)
        const person = response.data;
        return person
    }
}

export const personService = new PersonService();
