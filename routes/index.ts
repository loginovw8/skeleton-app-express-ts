import { Express } from "express";
import ApiV1ItemsController from "../app/controllers/api/v1/ItemsController.js";

export function registerRoutes(app: Express) {
    app.get('/api/v1/items', ApiV1ItemsController.index);
}
