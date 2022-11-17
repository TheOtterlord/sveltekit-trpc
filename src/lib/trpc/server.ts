import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
	hello: t.procedure.input(z.string()).query(async (opt) => {
    return `Hello ${opt.input}`;
	}),
});

export type AppRouter = typeof appRouter;
