import mongoose from "mongoose";


const movieSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    duration: { type: Number },
    year: { type: Number }    
}, {versionKey: false});

const movie = mongoose.model("marketMoviesdb", movieSchema); // a string que esta nesta prop e o nome da colecao criada no DB mongo

export default movie; 
//this is the "const above"