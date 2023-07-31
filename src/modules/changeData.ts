import type { DateInterface } from '../interface/time'
import {
	defaultDateType,
	longDateTimeType,
	longDateType,
	longTimeType,
	relativeType,
	shortDateTimeType,
	shortDateType,
	shortTimeType
} from './datingFunction'

export default function handlingDate(handlingInput: DateInterface) {
	if (handlingInput.type !== undefined) {
		if (handlingInput.date !== undefined) {
			if (handlingInput.time !== undefined) {
				const date: number = Math.floor(
					new Date(`${handlingInput.date} ${handlingInput.time}`).getTime() / 1000
				)

				let returnData: string | undefined = undefined

				switch (handlingInput.type) {
					case 2:
						returnData = shortTimeType(date)
						break

					case 3:
						returnData = longTimeType(date)
						break

					case 4:
						returnData = shortDateType(date)
						break

					case 5:
						returnData = longDateType(date)
						break

					case 6:
						returnData = shortDateTimeType(date)
						break

					case 7:
						returnData = longDateTimeType(date)
						break

					case 8:
						returnData = relativeType(date)
						break

					default:
						returnData = defaultDateType(date)
						break
				}

				return returnData
			} else {
				return ''
			}
		} else {
			return ''
		}
	} else {
		return ''
	}
}
