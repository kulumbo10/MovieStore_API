
import mongoose, { mongo } from "mongoose";

//the db string connection trsfred to "dtenv"
async function connectToDatabase () {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default connectToDatabase;

