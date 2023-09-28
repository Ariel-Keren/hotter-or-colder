<script lang="ts">
	import type City from "$lib/types";

	export let city: City;
	export let handleHotterClick: () => Promise<void>;
	export let handleColderClick: () => Promise<void>;
</script>

<div
	class="flex-1 flex flex-col justify-center items-center gap-7 bg-no-repeat bg-cover bg-center"
	style={`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${city.image})`}
>
	<div class="flex flex-col items-center gap-1">
		<h2 class="text-white font-medium text-4xl">{city.city}</h2>
		<h3 class="text-gray-500 font-medium text-xl">{city.country}</h3>
	</div>
	<div class="flex flex-col gap-1">
		<button
			on:click={handleHotterClick}
			class="bg-gray-950 text-white font-medium uppercase h-10 w-32 rounded hover:border-2 border-red-200 transition-colors hover:bg-gray-800"
			>🔥 Hotter</button
		>
		<button
			on:click={handleColderClick}
			class="bg-gray-950 text-white font-medium uppercase h-10 w-32 rounded hover:border-2 border-blue-200 transition-colors hover:bg-gray-800"
			>❄️ Colder</button
		>
	</div>
</div>
