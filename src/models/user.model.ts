import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interface/user.interface";


const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: [true, "Por favor ingresa tu nombre"],
        },
        password: {
            type: String,
            required: [true, "Por favor ingresa tu contraseña"],
        },
        email: {
            type: String,
            required: [true, "Por favor ingresa tu correo electrónico"],
            unique: true,
        },
        description: {
            type: String,
            default: "Sin descripción",
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const UserModel = model("users", UserSchema);

export default UserModel;