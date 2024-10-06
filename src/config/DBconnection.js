import mongoose from "mongoose";


async function connectionDatabase(){
    mongoose.connect('mongodb+srv://admin:admin@users.xk20j.mongodb.net/access?retryWrites=true&w=majority&appName=Users');

    return mongoose.connection;
}


export default connectionDatabase;