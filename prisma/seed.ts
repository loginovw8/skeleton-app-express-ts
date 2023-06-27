import { PrismaClient } from "@prisma/client";
import { createItem } from './factories';

const prisma = new PrismaClient();

async function main() {
    for (let i = 0; i < 10; i++) {
        createItem();
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
