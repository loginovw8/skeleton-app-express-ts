import { Express } from "express";
import IndexController from "../app/controllers/IndexController";
import ItemsController from "../app/controllers/ItemsController";
import ApiV1ItemsController from "../app/controllers/api/v1/ItemsController";

export function registerWebRoutes(app: Express) {
    app.get('/', IndexController.index);
    app.get('/items', ItemsController.index);
}

export function registerApiRoutes(app: Express) {
    app.get('/api/v1/items', ApiV1ItemsController.index);
}
