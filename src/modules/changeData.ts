import type { DateInterface } from '../interface/time'

export default function handlingDate(handlingInput: DateInterface) {
	if (Object.values(handlingInput).some(i => i === undefined)) return '';

	const date: number = Math.floor(
		new Date(`${handlingInput.date} ${handlingInput.time}`).getTime() / 1000
	)

	let dateTranslate = ["", "", ":t", ":T", ":d", ":D", ":f", ":F", ":R"]

	return `<t:${date}${dateTranslate[Number(handlingInput.type)]}>`
}
