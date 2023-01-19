// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { PrismaClient } from '@prisma/client';

// and what to do when importing types
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	// store prisma client as a global variable while running in dev mode to 
	// prevent the creation of a new instance of the prisma client at every HMR.
	var prisma: PrismaClient;
}

export {};
