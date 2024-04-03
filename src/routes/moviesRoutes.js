
import express from "express";
import MovieController from "../controllers/movieControllers.js";

const routes = express.Router();

routes.get("/movie", MovieController.listarMovies);
routes.post("/movie", MovieController.registMovie);
export default routes;