//this model deserv the same behaviour and elements as the first (controller, routes and same procedure)
import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    country: { type: String }
}, {versionKey: false});

const actor = mongoose.model("actors", actorSchema);

export { actor, actorSchema };

