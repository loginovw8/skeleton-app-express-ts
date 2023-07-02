import { Express } from "express";
import CategoriesController from "../app/controllers/api/v1/CategoriesController";

export function registerApiRoutes(app: Express) {
    app.get('/api/v1/categories', CategoriesController.index);
}
