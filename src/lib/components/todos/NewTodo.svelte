<details id="newtodo">
	<summary role="button"
		>Add todo <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
			/></svg
		></summary
	>
	<form action="?/createTodo" method="POST">
		<h2>New Todo</h2>
		<label>
			Title:
			<input type="text" name="title" />
		</label>
		<label>
			Content:
			<textarea name="content" cols="20" rows="6" />
		</label>
		<label>
			Todon't?
			<input type="checkbox" name="todont" />
		</label>
		<button type="submit">Save todo</button>
	</form>
</details>
