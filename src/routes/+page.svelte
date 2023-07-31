<script lang="ts">
	import TW_CLASS from '../constants/tailwind_class'
	import type { DateInterface } from '../interface/time'
	import handlingDate from '../modules/changeData'

	let typeListing = [
		{ id: 1, text: `default` },
		{ id: 2, text: `short time` },
		{ id: 3, text: `long time` },
		{ id: 4, text: `short date` },
		{ id: 5, text: `short date + time` },
		{ id: 6, text: `long date + time` },
		{ id: 7, text: `relative time` }
	]

	let selected: string | number = 1

	let type: string | number = selected
	let date: string | number | undefined = undefined
	let time: string | number | undefined = undefined

	const passingData: DateInterface = {
		type: type,
		date: date,
		time: time
	}

	let returnData: string | number = 0

	function innerHandling(form: string, data: string | number): any {
		switch (form) {
			case type:
				type = data
				returnData = handlingDate(passingData)
				break

			case 'date':
				date = data
				returnData = handlingDate(passingData)
				break

			default:
				time = data
				returnData = handlingDate(passingData)
				break
		}
	}
</script>

<svelte:head>
	<title>Synclarity Timestamp</title>
	<meta name="description" content="discord timestamp generator" />
</svelte:head>

<section>
	<div class={TW_CLASS.container}>
		<h1 class={TW_CLASS.heading.xxxl}>TimeStamp Generator</h1>

		<div class="w-[80%] md:w-[50%] text-pastel-black">
			<!-- Input -->
			<form class="!text-pastel-black !mb-2">
				<select
					bind:value={selected}
					class="!text-pastel-black !p-2 mb-2"
					on:change={innerHandling('type', selected)}
				>
					{#each typeListing as sType}
						{#if sType.id === 1}
							<option value={sType.id} class="text-pastel-black" selected>
								{sType.text}
							</option>
						{:else}
							<option value={sType.id} class="text-pastel-black">
								{sType.text}
							</option>
						{/if}
					{/each}
				</select>

				<br />

				<input
					type="date"
					bind:value={date}
					class="my-2 p-2"
					on:change={innerHandling('date', date != undefined ? date : 0)}
				/>
				<input
					type="time"
					bind:value={time}
					class="my-2 p-2"
					on:change={innerHandling('time', time != undefined ? time : 0)}
				/><br />
			</form>

			<!-- Result -->
			<div class="p-4 my-2 w-full bg-whitesmoke text-pastel-black text-xl rounded">
				<!-- &lt;t:1690778280:R&gt; -->
				{returnData}

				{type}
				{date}
				{time}
			</div>
		</div>
	</div>
</section>

<style>
</style>
