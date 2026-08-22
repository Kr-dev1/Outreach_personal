import { auth } from '@/lib/auth/auth';
import { initTRPC } from '@trpc/server';
import { headers } from 'next/headers';

export const createTRPCContext = async (opts: { headers: Headers }) => {
    const session = await auth.api.getSession({
        headers: opts.headers,
    })
    return { userId: 'user_123', session };
};

const t = initTRPC
    .context<Awaited<ReturnType<typeof createTRPCContext>>>()
    .create();

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;