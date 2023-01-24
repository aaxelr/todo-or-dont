<script lang="ts">
	import type { Todo as TTodo } from '@prisma/client';
	import Todo from './Todo.svelte';

	export let todoList: TTodo[];
	export let listTitle: string;
	export let headerId: string;
</script>

<div>
	<h2 id={headerId}>
		{listTitle}
		<slot />
	</h2>
	{#each todoList as todo}
		<Todo {todo} />
	{/each}
</div>

<style>
	h2:target {
		scroll-margin-top: 160px;
	}

	@media (max-width: 575) {
		h2:target {
			scroll-margin-top: 150px;
		}
	}
</style>
