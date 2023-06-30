import { Item, PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

class ItemsRepository {
    async all(): Promise<Item[]> {
        return prisma.item.findMany({
            include: {
                location: true,
                categories: {
                    include: {
                        category: true,
                    }
                }
            }
        });
    }
}

export default new ItemsRepository();
