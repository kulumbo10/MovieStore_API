import mongoose from "mongoose";
import { actorSchema } from "./Actor.js";


const movieSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    duration: { type: Number },
    year: { type: Number },
    actor: actorSchema    
}, {versionKey: false});

// a string que esta nesta prop e o nome da "collection" criada na DB do mongo
const movie = mongoose.model("marketMoviesdb", movieSchema); 

export default movie; 
//this is the "const above"