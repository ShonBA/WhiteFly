import { ResourceNotFound } from "../3-models/error-models";
import { IPersonModel, PersonModel } from "../3-models/person-model";

class PersonsService {

    public getAllPersons(): Promise<IPersonModel[]> {
        return PersonModel.find().exec();
    }
    
    public async getPersonById(_id: string): Promise<IPersonModel> {
        const person = await PersonModel.findById(_id).exec();
        if (!person) throw new ResourceNotFound(_id);
        return person;
    }

}

const personsService = new PersonsService();

export default personsService;
