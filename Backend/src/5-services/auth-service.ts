import cyber from "../2-utils/cyber";
import { ICredentialsModel } from "../3-models/credentials-model";
import { Unauthorized, Validation } from "../3-models/error-models";
import { IUserModel, UserModel } from "../3-models/user-model";

class AuthService {

    public async register(user: IUserModel): Promise<string> {
        user.password = cyber.hashPassword(user.password);
        user.role = "User";
        const errors = user.validateSync();
        const token = cyber.getNewToken(user);
        if (errors) throw new Validation(errors.message);
        await user.save();
        return token;
    }

    public async login(credentials: ICredentialsModel): Promise<string> {
        credentials.password = cyber.hashPassword(credentials.password);
        const errors = credentials.validateSync();
        if (errors) throw new Validation(errors.message);
        const user = await UserModel.findOne({ email: credentials.email, password: credentials.password });
        if (!user) throw new Unauthorized("Incorrect username or password")
        const token = cyber.getNewToken(user);
        return token;
    }
}

const authService = new AuthService();

export default authService;
