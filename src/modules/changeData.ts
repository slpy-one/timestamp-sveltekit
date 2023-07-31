import type { DateInterface } from '../interface/time'

export default function handlingDate(handlingInput: DateInterface) {
	if (handlingInput.type !== undefined) {
		if (handlingInput.date !== undefined || handlingInput.date !== 0) {
			if (handlingInput.time !== undefined || handlingInput.time !== 0) {
				

				return 1
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
