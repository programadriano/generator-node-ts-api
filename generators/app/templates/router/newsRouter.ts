import * as express from "express";
import ValuesController from "../controller/valuesController";

const newsRouter = express.Router();

newsRouter.route("/api/v1/values").get(ValuesController.get);
newsRouter.route("/api/v1/values/:id").get(ValuesController.getById);
newsRouter.route("/api/v1/values").post(ValuesController.create);
newsRouter.route("/api/v1/values/:id").put(ValuesController.update);
newsRouter.route("/api/v1/values/:id").delete(ValuesController.delete);

export default newsRouter;