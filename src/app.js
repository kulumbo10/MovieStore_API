
import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

//the db string connection trsfred to "dtenv" the asyn is there
const conexao = await connectToDatabase();

conexao.on("error", (erro) => {
    console.error("connection failed", erro);
});

conexao.once("open", () => {
    console.log("connection with DB successifuly!");
});


//atribuindo o express no app
const app = express();
routes(app);


export default app;