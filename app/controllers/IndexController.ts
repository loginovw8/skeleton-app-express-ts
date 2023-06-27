import { Request, Response } from "express";

class IndexController {
    async index(req: Request, res: Response) {
        res.render('index');
    }
}

export default new IndexController();
