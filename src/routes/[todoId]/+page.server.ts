import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error, fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const getTodo = async () => {
		const todo = await prisma.todo.findUnique({
			where: {
				id: params.todoId
			}
		});
		if (!todo) {
			throw error(404, 'Todo not found');
		}
		return todo;
	};
	return {
		todo: getTodo()
	};
};

export const actions: Actions = {
	updateTodo: async ({ request, params }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const content = data.get('content') as string;
		const todont = !!data.get('todont');

		try {
			await prisma.todo.update({
				where: {
					id: params.todoId
				},
				data: {
					title,
					content,
					todont
				}
			});
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Could not update todo.' });
		}

		throw redirect(303, '/');
	}
};
