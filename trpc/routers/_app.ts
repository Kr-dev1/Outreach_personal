import { createTRPCRouter } from '../init';
import { filterRouter } from './filterRouter';
import { overviewRouter } from './overviewRouter';

export const appRouter = createTRPCRouter({
    filter: filterRouter,
    overview: overviewRouter
});

export type AppRouter = typeof appRouter;