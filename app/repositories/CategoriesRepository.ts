import { Category, PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

class CategoriesRepository {
    async all(): Promise<Category[]> {
        return prisma.category.findMany();
    }
}

export default new CategoriesRepository();
