<script lang="ts">
	import type { Todo } from '@prisma/client';

	export let todo: Todo;
	let { title, content, dateAdded, done, todont, id } = todo;
</script>

<article>
	<header class:todont>{title}</header>
	<p class:todont>{content}</p>
	<hr />
	{#if done}
		<b
			>Yay! You're done!
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895l-3.667-3.714l1.424-1.404l2.257 2.286l4.327-4.294l1.408 1.42l-5.749 5.706z"
				/></svg
			>
		</b>
	{:else}
		<b>
			Still got work to do(n't)
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M16.707 2.293A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707l-5-5zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"
				/></svg
			>
		</b>
	{/if}
	<footer>
		<p>Date Added: {dateAdded.toLocaleDateString()}</p>
		<form action="?/updateTodoIsDone&id={id}" method="POST">
			<button class="contrast" type="submit">
				{#if !done}
					Mark as done <svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895l-3.667-3.714l1.424-1.404l2.257 2.286l4.327-4.294l1.408 1.42l-5.749 5.706z"
						/></svg
					>
				{:else}
					Mark as not done <svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M16.707 2.293A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707l-5-5zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"
						/></svg
					>
				{/if}
			</button>
		</form>
		<form action="?/deleteTodo&id={id}" method="POST">
			<button class="contrast" type="submit"
				>Delete <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"
					/></svg
				></button
			>
		</form>
		<a href="/{id}"
			>Edit <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M8.707 19.707L18 10.414L13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586L19.414 9L21 7.414z"
				/></svg
			></a
		>
	</footer>
</article>

<style>
	.todont {
		text-decoration-line: line-through;
	}
</style>
