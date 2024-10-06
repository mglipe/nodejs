import mongoose from "mongoose";
import { platformSchema } from "./Platform.js";
const userSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name:{type: String},
    account: {type: Number},
    user: {type: String, required: [true, 'campo usuário é requerido']},
    password: {
        type: String, 
        required: [true, 'campo senha é requerido'],
        //validações personalizadas
        validate: {
            validator: (value) =>{
                return value.length >= 8 && value.length <= 16;
            },
            message: ({path})=> `The field ${path} has min 8 and max 16 character`
        } 
    },
    platform: platformSchema
}, {versionKey: false})


const modelUser = mongoose.model('users', userSchema);

export default modelUser;
