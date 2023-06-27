import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await prisma.item.findMany();

        res.send(items);
    }
}

export default new ItemsController();
