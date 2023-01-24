import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		todos: await prisma.todo.findMany()
	};
};

export const actions: Actions = {
	createTodo: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const content = data.get('content') as string;
		const todont = !!data.get('todont');

		try {
			await prisma.todo.create({
				data: {
					title,
					content,
					todont
				}
			});
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not create new todo.' });
		}

		throw redirect(303, '/');
	},
	deleteTodo: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await prisma.todo.delete({
				where: {
					id
				}
			});
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Something went wrong' });
		}

		throw redirect(303, '/');
	},
	updateTodoIsDone: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			const todo = await prisma.todo.findUnique({
				where: {
					id
				}
			});
			if (!todo) {
				return fail(400, { message: 'Invalid request' });
			}

			await prisma.todo.update({
				where: {
					id
				},
				data: {
					done: !todo.done
				}
			});
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not update todo.' });
		}

		throw redirect(303, '/');
	}
};
