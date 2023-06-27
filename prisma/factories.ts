import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

export async function createItem() {
    await prisma.item.create({
        data: {
            name: faker.word.noun(),
        },
    });
}
