import { TRPCError } from "@trpc/server"
import { baseProcedure } from "../init"

export const protectedProcedure = baseProcedure.use(({ ctx, next }) => {
    if (!ctx.session?.user) {
        console.log("unauth", ctx?.session?.user);
        throw new TRPCError({
            code: "UNAUTHORIZED"
        })
    }

    return next({
        ctx: {
            ...ctx,
            user: ctx.session.user
        }
    })
})