import { Express } from "express";
import ItemsController from "../app/controllers/ItemsController";
import ApiV1ItemsController from "../app/controllers/api/v1/ItemsController";

export function registerWebRoutes(app: Express) {
    app.get('/items', ItemsController.index);
}

export function registerApiRoutes(app: Express) {
    app.get('/api/v1/items', ApiV1ItemsController.index);
}
