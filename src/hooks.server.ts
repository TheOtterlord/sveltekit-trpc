import type { Handle } from '@sveltejs/kit';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '$lib/trpc/server';

const trpcPathBase = '/api/trpc';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith(`${trpcPathBase}/`)) {
		const response = await fetchRequestHandler({
			endpoint: trpcPathBase,
			req: event.request,
			router: appRouter,
			createContext() {
				return {
					req: event.request,
				};
			},
		});

		return response;
	}

	return await resolve(event);
};
