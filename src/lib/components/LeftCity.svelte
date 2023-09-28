<script lang="ts">
	import type City from "$lib/types";
	import isCelsius from "$lib/isCelsiusStore";

	export let city: City;

	const changeUnits = () => {
		$isCelsius = !$isCelsius;
	};
</script>

<div
	class="flex-1 flex flex-col justify-center items-center border-r-2 border-gray-950 bg-no-repeat bg-cover bg-center"
	style={`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${city.image})`}
>
	<div class="flex flex-col items-center gap-1">
		<h2 class="text-white font-medium text-4xl">{city.city}</h2>
		<h3 class="text-gray-500 font-medium text-xl">{city.country}</h3>
	</div>
	<button
		on:click={changeUnits}
		class="text-white text-5xl font-bold m-6 p-3 rounded hover:bg-opacity-5 hover:bg-white"
	>
		{$isCelsius ? `${city.celsius}°C` : `${city.fahrenheit}°F`}
	</button>
</div>
