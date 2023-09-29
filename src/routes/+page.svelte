<script lang="ts">
	import type City from "$lib/types";
	import getCity from "$lib/getCity";
	import LeftCity from "$lib/components/LeftCity.svelte";
	import RightCity from "$lib/components/RightCity.svelte";
	import Score from "$lib/components/Score.svelte";
	import VS from "$lib/components/VS.svelte";
	import ScoreModal from "$lib/components/ScoreModal.svelte";
	import PendingCity from "$lib/components/PendingCity.svelte";
	import Head from "$lib/components/Head.svelte";
	import { onMount } from "svelte";

	let score = 0;
	let history = ["", "", "", "", ""];
	let isScoreModalShown = false;
	let left: City | null = null;
	let right: City | null = null;
	let pending: City | null = null;
	let pendingStart: City | null = null;

	onMount(async () => {
		pendingStart = await getCity(history);
		pending = await getCity(history);
	});

	const goToMenu = () => {
		isScoreModalShown = false;
		left = null;
		right = null;
	};

	const nextTurn = async () => {
		if (!left || !right || !pending) return;

		score++;
		left = { ...right };
		right = { ...pending };
		pending = await getCity(history);
	};

	const start = async () => {
		isScoreModalShown = false;
		score = 0;
		left = pendingStart ? { ...pendingStart } : await getCity(history);
		right = pending ? { ...pending } : await getCity(history);
		pendingStart = await getCity(history);
		pending = await getCity(history);
	};

	const handleHotterClick = async () => {
		if (!left || !right) return;

		if (right.celsius >= left.celsius) return await nextTurn();
		isScoreModalShown = true;
	};

	const handleColderClick = async () => {
		if (!left || !right) return;

		if (right.celsius <= left.celsius) return await nextTurn();
		isScoreModalShown = true;
	};
</script>

<Head />
{#if left && right}
	<Score {score} />
	<VS />
	<div class="flex h-screen">
		<LeftCity city={left} />
		<RightCity city={right} {handleHotterClick} {handleColderClick} />
	</div>
	{#if isScoreModalShown}
		<ScoreModal {score} {start} {goToMenu} />
	{/if}
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
			>Play</button
		>
	</div>
{/if}
<PendingCity image={pending?.image ?? ""} />
<PendingCity image={pendingStart?.image ?? ""} />
