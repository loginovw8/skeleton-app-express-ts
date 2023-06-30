import { Request, Response } from "express";
import ItemsRepository from "../repositories/ItemsRepository";

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await ItemsRepository.all();

        res.render('index', {
            items: items,
        });
    }
}

export default new ItemsController();
