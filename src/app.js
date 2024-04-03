
import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";


const conexao = await connectToDatabase();

conexao.on("error", (erro) => {
    console.error("connection failed", erro);
});

conexao.once("open", () => {
    console.log("connection with DB successifuly!");
});



const app = express();
routes(app);



/*
DADOS ESTATICOS DA DB

const movies = [
    {
        id: 1,
        title: "Transformer I"
    },
    {
        id: 2,
        title: "The Lord of the Rings"
    }
];


function getmovies(id) {
    return getmovies.findIndex(movies => {
    return movies.id === Number(id);
    });
};
*/


/*
app.get("/movie", async (req, res) => {
    const listmovies = await movie.find({}); 
    res.status(200) .json(listmovies);
});
*/
/*app.get("/movies/:id", (req, res) => {
    const index = getmovies(req.params.id); //using the function getmovies in this route as callback
    res.status(200) .json(movies[index]);
});
*/
/*
app.post("/movies", (req, res) => {
    movies.push(req.body);
    res.status(200) .send("movie registered with success!");
});

app.put("/movies/:id", (req, res) => {
    const index = getmovies(req.params.id);
    movies[index].title = req.body.title; // method access Javascript
    res.status(200) .json(movies);
});

app.delete("/movies/:id", (req, res) => {
    const index = movies(req.params.id);
    movies.splice(index, 1);    //splice() Js method, that find and delete or change a data (1 is the quantity)
    res.status(200) .send("movie deleted with success!");
});
*/


export default app;