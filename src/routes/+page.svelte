<script lang="ts">
	import TW_CLASS from '../constants/tailwind_class'
	import type { DateInterface } from '../interface/time'
	import handlingDate from '../modules/changeData'

	let typeListing = [
		{ id: 1, text: `default` },
		{ id: 2, text: `short time` },
		{ id: 3, text: `long time` },
		{ id: 4, text: `short date` },
		{ id: 5, text: `long date` },
		{ id: 6, text: `short date + time` },
		{ id: 7, text: `long date + time` },
		{ id: 8, text: `relative time` }
	]

	let selected: string | number = 1

	let type: string | number = selected
	let date: string | undefined = undefined
	let time: string | undefined = undefined

	let passingData: DateInterface = {
		type: type,
		date: date,
		time: time
	}

	let returnData: string | number | undefined = 0

	function innerHandling(form: string, data: string): any {
		switch (form) {
			case type:
				type = data
				passingData = {
					type: type,
					date: date,
					time: time
				}
				returnData = handlingDate(passingData)
				break

			case 'date':
				date = data
				passingData = {
					type: type,
					date: date,
					time: time
				}
				returnData = handlingDate(passingData)
				break

			default:
				time = data
				passingData = {
					type: type,
					date: date,
					time: time
				}
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
					on:change={innerHandling('type', selected.toString())}
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
					on:change={innerHandling('date', date != undefined ? date : '')}
					on:input={innerHandling('date', date != undefined ? date : '')}
				/>
				<input
					type="time"
					bind:value={time}
					class="my-2 p-2"
					on:change={innerHandling('time', time != undefined ? time : '')}
					on:input={innerHandling('time', time != undefined ? time : '')}
				/><br />
			</form>

			<!-- Result -->
			<div class="p-4 my-2 w-full bg-whitesmoke text-pastel-black text-xl rounded">
				<!-- &lt;t:1690778280:R&gt; -->
				{returnData !== '' && returnData !== 0 ? returnData : 'Waiting fot Input...'}
			</div>
		</div>
	</div>
</section>

<style>
</style>
