<script lang="ts">
	let visible = true;
	let lastScroll = 0;

	function handleScroll() {
		const scroll = window.pageYOffset;
		visible = scroll < 100 || scroll < lastScroll;
		lastScroll = scroll;
	}
</script>

<svelte:window on:scroll={handleScroll} />
<svelte:head>
	<title>To do, or not to do</title>
</svelte:head>

<header class:visible>
	<nav>
		<ul>
			<li class="title">
				<a href="/">
					To do, or not to do <svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 2C5.505 2 2 6.637 2 11c0 2.129 1.009 3.979 3 5.508V21h3v-3h2v3h4v-3h2v3h3v-4.493c1.991-1.528 3-3.379 3-5.507c0-4.363-3.505-9-10-9zM8 13c-1.121 0-2-1.098-2-2.5S6.879 8 8 8s2 1.098 2 2.5S9.121 13 8 13zm8 0c-1.121 0-2-1.098-2-2.5S14.879 8 16 8s2 1.098 2 2.5s-.879 2.5-2 2.5z"
						/></svg
					>
				</a>
			</li>
		</ul>
		<ul class="nav-links">
			<li><a href="#todos">Todos</a></li>
			<li><a href="#todonts">Todon'ts</a></li>
			<li><a href="#dones">Dones</a></li>
		</ul>
	</nav>
</header>

<style>
	.title {
		font-size: 2rem;
		font-weight: 600;
	}

	.title a {
		margin: 0;
	}

	header {
		height: 100px;
		position: fixed;
		top: 0;
		z-index: 666;
		background-color: var(--background-color);
		--shadow-height: 0.5rem;
		--shadow-gradient: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.1) 0%,
			rgba(0, 0, 0, 0.05) 30%,
			transparent 100%
		);
	}

	header::after {
		content: '';
		position: absolute;
		width: 100%;
		height: var(--shadow-height);
		left: 0;
		bottom: calc(-1 * var(--shadow-height));
		background: var(--shadow-gradient);
	}

	nav {
		flex-wrap: wrap;
		padding-inline: var(--spacing);
		width: 100vw;
	}

	@media (max-width: 575px) {
		header {
			height: 120px;
			transition: transform 0.333s ease-out;
		}

		header:not(.visible) {
			transform: translate(0, calc(-100% - 5rem));
		}

		nav {
			flex-direction: column;
		}

		ul {
			justify-content: space-evenly;
		}

		li {
			text-align: center;
			flex: 1 100%;
			padding: 0.325rem 0.5rem;
		}

		a {
			width: 100%;
			text-align: center;
			padding: 0;
		}
	}

	@media (min-width: 992px) {
		.nav-links {
			display: none;
		}
	}
</style>
