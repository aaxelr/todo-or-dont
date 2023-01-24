<script lang="ts">
	import NewTodo from '$lib/components/todos/NewTodo.svelte';
	import TodoList from '$lib/components/todos/TodoList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: todos = data.todos.filter((todo) => !todo.done && !todo.todont);
	$: todonts = data.todos.filter((todo) => todo.todont);
	$: dones = data.todos.filter((todo) => todo.done);
</script>

<NewTodo />
<div class="grid">
	<TodoList todoList={todos} listTitle="Todos" headerId="todos">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-7 13h-2v-2h2v2zm0-4h-2V5h2v6z"
			/></svg
		>
	</TodoList>
	<TodoList todoList={todonts} listTitle="Todon'ts" headerId="todonts">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3.294 11.543l-1.414 1.414l-3.293-3.292l-3.292 3.292l-1.414-1.414l3.292-3.292l-3.292-3.293l1.414-1.414l3.292 3.292l3.293-3.292l1.414 1.414l-3.292 3.293l3.292 3.292z"
			/></svg
		>
	</TodoList>
	<TodoList todoList={dones} listTitle="Dones" headerId="dones">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-9 11.914l-3.707-3.707l1.414-1.414L11 11.086l4.793-4.793l1.414 1.414L11 13.914z"
			/></svg
		>
	</TodoList>
</div>
