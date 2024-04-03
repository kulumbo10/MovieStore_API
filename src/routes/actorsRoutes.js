
import express from "express";
import actorsController from "../controllers/actorsControllers.js";

//routes for actor model/schema
const routes = express.Router();

routes.get("/actor", actorsController.listarActor);
routes.get("/actor/:id", actorsController.listarActorPorId);
routes.post("/actor", actorsController.saveActor);
routes.put("/actor/:id", actorsController.atualizarActor);
routes.delete("/actor/:id", actorsController.deletarActor);


export default routes;