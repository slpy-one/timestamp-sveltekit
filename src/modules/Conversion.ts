export function FullMonthConversion(month: number) {
	const monthList = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]

  return monthList[month]
}

export function FullDayConversion(day: number) {
	const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	return dayName[day]
}

export function TimeConversion(timeStamp: Date){
	const hr = (String(timeStamp.getHours()).length < 2 ) ? `0${String(timeStamp.getHours())}` : String(timeStamp.getHours())
	const min = (String(timeStamp.getMinutes()).length < 2) ? `0${String(timeStamp.getMinutes())}` : String(timeStamp.getMinutes())

	return `${hr}:${min}`
}