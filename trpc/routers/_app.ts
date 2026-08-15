import { createTRPCRouter } from '../init';
import { filterRouter } from './filterRouter';

export const appRouter = createTRPCRouter({
    filter: filterRouter
});

export type AppRouter = typeof appRouter;