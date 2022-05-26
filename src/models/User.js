import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String, required: true},
        email: {type: String, required: true},
        pass: {type: String, required: true},
        group_user: {type: String, required: true},
        username: {type: String},
        ativo: {type: Boolean, required: true},
        establishments: {type: Array, required: true},
        password: {type: String, required: true},
        nome: {type: String}
    }
)
const users = mongoose.model('usuarios', userSchema);

export default users;