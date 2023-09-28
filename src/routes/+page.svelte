<script lang="ts">
	import type City from "$lib/types";
	import getRandomCity from "$lib/getRandomCity";
	import LeftCity from "$lib/components/LeftCity.svelte";
	import RightCity from "$lib/components/RightCity.svelte";
	import Score from "$lib/components/Score.svelte";
	import VS from "$lib/components/VS.svelte";

	let score = 0;
	// let left: City | null = null;
	// let right: City | null = null;
	let left: City | null = {
		city: "New York City",
		country: "US",
		image:
			"https://images.unsplash.com/photo-1585155967849-91c736589c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
		celsius: 13.3,
		fahrenheit: 55.9
	};
	let right: City | null = {
		city: "Singapore",
		country: "Singapore",
		image:
			"https://images.unsplash.com/photo-1602010143890-8dbfa316b5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
		celsius: 29,
		fahrenheit: 84.2
	};

	const nextTurn = async () => {
		if (!left || !right) return;

		score++;
		left = { ...right };
		right = await getRandomCity();
	};

	const start = async () => {
		score = 0;
		left = await getRandomCity();
		right = await getRandomCity();
	};

	const handleHotterClick = async () => {
		if (!left || !right) return;

		if (right.celsius > left.celsius) return await nextTurn();
		left = null;
		right = null;
	};

	const handleColderClick = async () => {
		if (!left || !right) return;

		if (right.celsius < left.celsius) return await nextTurn();
		left = null;
		right = null;
	};
</script>

{#if left && right}
	<Score {score} />
	<VS />
	<div class="flex h-screen">
		<LeftCity city={left} />
		<RightCity city={right} {handleHotterClick} {handleColderClick} />
	</div>
{:else}
	<div
		class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-10 w-full"
	>
		<h1 class="text-7xl text-gray-700 font-bold uppercase">
			<span class="text-red-200">Hotter</span> or
			<span class="text-blue-200">Colder</span>
		</h1>
		<button
			on:click={start}
			class="text-white py-2 px-10 rounded font-medium uppercase text-2xl border-2 border-green-200 transition-colors hover:bg-green-200 hover:text-black"
			>Start</button
		>
	</div>
{/if}
