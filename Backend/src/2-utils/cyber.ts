import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Forbidden, Unauthorized } from "../3-models/error-models";
import { IUserModel } from "../3-models/user-model";

class Cyber {

    private secretKey = "memorial-project-by-hadar-shon";

    public getNewToken(user: IUserModel): string {
        delete user.password;
        const container = { user };
        const options = { expiresIn: "3h" };
        const token = jwt.sign(container, this.secretKey, options);
        return token;
    };

    public verifyToken(token: string): void {
        if (!token) throw new Unauthorized("Your not logged in.");
        try {
            jwt.verify(token, this.secretKey);
        } catch (err: any) {
            throw new Unauthorized(err.message);
        }
    };

    public verifyAdmin(token: string): void {
        this.verifyToken(token);
        const container = jwt.verify(token, this.secretKey) as { user: IUserModel };
        const user = container.user;
        if (user.role !== "Admin") throw new Forbidden("You are not Admin");
    };

    public hashPassword(password: string): string {
        if (!password) return null;
        const salt = "saltingExploreEaseUsersPassword";
        const hashedPassword = crypto.createHmac("sha512", salt).update(password).digest("hex");
        return hashedPassword;
    };

    public decryptToken(token: string): IUserModel {
        const container = jwt.verify(token, this.secretKey) as { user: IUserModel };
        const user = container.user;
        return user;
    };
}

const cyber = new Cyber();
export default cyber;
