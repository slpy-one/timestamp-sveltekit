<script lang="ts">
	import TW_CLASS from '../constants/tailwind_class'
	import type { DateInterface } from '../interface/time'
	import handlingDate from '../modules/changeData'
	import handleExample from '../modules/exampleDate'

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

	let _type: string | number = selected
	let _date: string | undefined = undefined
	let _time: string | undefined = undefined

	let passingData: DateInterface = {
		type: _type,
		date: _date,
		time: _time
	}

	let returnData: string | number | undefined = handlingDate(passingData)
	let exampleData: string | undefined = handleExample(passingData)

	function innerHandling(form: string, data: string): any {
		console.log(form, data)
		switch (form) {
			case 'type':
				_type = Math.max(1, Math.min(8, Number(data)))
				break

			case 'date':
				_date = data
				break

			case 'time':
				_time = data
				break
		}
		passingData = {
			type: _type,
			date: _date,
			time: _time
		}
		returnData = handlingDate(passingData)
		exampleData = handleExample(passingData)
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
					class="!text-pastel-black !p-2 mb-2 rounded"
					on:change={innerHandling('type', selected.toString())}
				>
					{#each typeListing as sType}
						<option value={sType.id} class="text-pastel-black">
							{sType.text}
						</option>
					{/each}
				</select>

				<br />

				<input
					type="date"
					bind:value={_date}
					class="my-2 p-2 mr-2 rounded"
					on:change={innerHandling('date', _date != undefined ? _date : '')}
					on:input={innerHandling('date', _date != undefined ? _date : '')}
				/>
				<input
					type="time"
					bind:value={_time}
					class="my-2 p-2 rounded ml-2"
					on:change={innerHandling('time', _time != undefined ? _time : '')}
					on:input={innerHandling('time', _time != undefined ? _time : '')}
				/><br />
			</form>

			<!-- Result -->
			<div class="p-4 my-2 mb-4 w-full bg-whitesmoke text-pastel-black text-xl rounded">
				<h1 class={`${TW_CLASS.heading.xxl} !pt-0`}>
					Result
				</h1>
				<code class="bg-overlay p-2 text-whitesmoke">
					{returnData !== '' && returnData !== 0 ? returnData : 'Waiting fot Input...'}
				</code>
			</div>

			<div class="p-4 my-2 mt-4 w-full bg-whitesmoke text-pastel-black text-xl rounded">
				<h1 class={`${TW_CLASS.heading.xxl} !pt-0`}>
					What showing on discord
				</h1>
				<code class="bg-overlay p-2 text-whitesmoke">
					{exampleData}
				</code>
			</div>
		</div>
	</div>
</section>

<style>
</style>
