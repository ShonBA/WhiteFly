import { ResourceNotFound, Validation } from "../3-models/error-models";
import { IPersonModel, PersonModel } from "../3-models/person-model";

class PersonsService {

    public async getAllPersons(): Promise<IPersonModel[]> {
        return await PersonModel.find().exec();
    }

    public async getPersonById(_id: string): Promise<IPersonModel> {
        const person = await PersonModel.findById(_id).exec();
        if (!person) throw new ResourceNotFound(_id);
        return person;
    }

    public async addPerson(person: IPersonModel): Promise<IPersonModel> {
        const errors = person.validateSync();
        if (errors) throw new Validation(errors.message);
        return await person.save();
    }
}

const personsService = new PersonsService();

export default personsService;
