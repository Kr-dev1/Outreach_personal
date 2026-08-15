import { createTRPCRouter } from "../init";
import { protectedProcedure } from "../proceure/protectedProcedure";
import prisma from "@/lib/prisma/prisma";

export const filterRouter = createTRPCRouter({
    getFilters: protectedProcedure.query(async () => {
        const [category, country, city] = await Promise.all([

            prisma.company.findMany({
                select: {
                    category: true,
                },
                distinct: ["category"],
            }),
            prisma.company.findMany({
                select: {
                    country: true
                },
                distinct: ["country"]
            }),
            prisma.company.findMany({
                select: {
                    city: true
                },
                distinct: ["city"]
            })
        ])
        return { category, country, city };
    })
})