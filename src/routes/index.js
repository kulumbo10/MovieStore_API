import express from "express";
import movies from "./moviesRoutes.js";
import actor from "./actorsRoutes.js";


const routes = (app) => {
    
    app.route("/").get((req, res) => res.status(200).send("Testando Api routas"));

    app.use(express.json(), movies, actor);

};

export default routes;