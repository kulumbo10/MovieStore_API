
import express from "express";
import MovieController from "../controllers/movieControllers.js";

const routes = express.Router();

routes.get("/movie", MovieController.listarMovie);
routes.get("/movie/:id", MovieController.listarMoviePorId);
routes.post("/movie", MovieController.saveMovie);
routes.put("/movie/:id", MovieController.atualizaMovie);
routes.delete("/movie/:id", MovieController.deletarMovie);


export default routes;