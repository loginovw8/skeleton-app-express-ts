import { Request, Response } from "express";
import CategoriesRepository from "../../../repositories/CategoriesRepository";

class CategoriesController {
    async index(req: Request, res: Response) {
        const items = await CategoriesRepository.all();

        res.send(items);
    }
}

export default new CategoriesController();
