import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User): Promise<User | string> => {
    const checkIs = await UserModel.findOne({ email });
    if(checkIs) return "ALREADY_USER";
    const passHash: string = await encrypt(password);

    const newUser: User = await UserModel.create({ email, password: passHash, name });
    return newUser;
}

const loginUser = async ({ email, password}: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if(!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password;
    const isCorrect = await verify(password, passwordHash);

    if(!isCorrect) return "INCORRECT_PASSWORD";

    const token = generateToken(checkIs.email);

    const data = {
        token,
        user: checkIs
    }

    return data;
}

export { registerNewUser, loginUser };