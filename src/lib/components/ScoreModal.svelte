<script lang="ts">
	export let score: number;
	export let start: () => void;
	export let goToMenu: () => void;
</script>

<div class="fixed top-0 flex justify-center items-center w-screen h-screen backdrop-brightness-90">
	<div
		class="bg-gray-950 flex flex-col items-center justify-around h-1/2 w-1/2 rounded drop-shadow-2xl"
	>
		<div class="flex flex-col items-center">
			<h2 class="text-gray-200 text-3xl uppercase font-medium">Game Over</h2>
			<p class="text-gray-400 text-2xl uppercase font-medium">Score: {score}</p>
		</div>
		<div class="flex flex-col items-center gap-1">
			<button
				on:click={start}
				class="text-white h-12 w-48 rounded font-medium uppercase text-xl border-2 border-green-200 transition-colors hover:bg-green-200 hover:text-black"
				>Try Again</button
			>
			<button
				on:click={goToMenu}
				class="text-white h-12 w-48 rounded font-medium uppercase text-xl border-2 border-gray-200 transition-colors hover:bg-gray-200 hover:text-black"
				>Back to Menu</button
			>
		</div>
	</div>
</div>
