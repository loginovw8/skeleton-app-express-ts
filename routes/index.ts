import { Express } from "express";
import ItemsController from "../app/controllers/api/v1/ItemsController.js";

export function registerRoutes(app: Express) {
    app.get('/api/v1/items', ItemsController.index);
}
