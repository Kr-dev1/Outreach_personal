import { createTRPCRouter } from "../init";
import prisma from "@/lib/prisma/prisma";
import { protectedProcedure } from "../proceure/protectedProcedure";

export const overviewRouter = createTRPCRouter({
    getOverview: protectedProcedure.query(async () => {
        const [totalCount, noWebsite, phone, lastSynced] = await Promise.all([
            prisma.company.count(),
            prisma.company.count({
                where: {
                    website: null
                }
            }),
            prisma.company.count({
                where: {
                    phone: {
                        not: null
                    }
                }
            }),
            prisma.discoveryRun.findFirst({
                orderBy: {
                    createdAt: "desc",
                },
            })
        ])

        return { totalCount, noWebsite, phone, lastSynced }
    }),
    getRecentData: protectedProcedure.query(async () => {
        const data = await prisma.company.findMany({
            take: 10,
            orderBy: {
                updatedAt: "desc"
            }
        })

        return data
    })
});