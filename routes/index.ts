import { Express } from "express";
import ItemsController from "../app/controllers/ItemsController";

export function registerRoutes(app: Express) {
    app.get('/', ItemsController.index);
}
