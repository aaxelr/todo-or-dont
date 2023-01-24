<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ todo } = data);
</script>

<svelte:head>
	<title>Editing: {todo.title}</title>
</svelte:head>

<form action="?/updateTodo" method="POST">
	<h2>Editing: {todo.title}</h2>
	<label>
		Title:
		<input type="text" name="title" value={todo.title} />
	</label>
	<label>
		Content:
		<textarea name="content" cols="20" rows="6" value={todo.content} />
	</label>
	<label>
		Todon't?
		<input type="checkbox" name="todont" checked={todo.todont} />
	</label>
	<button type="submit">Update</button>
</form>
