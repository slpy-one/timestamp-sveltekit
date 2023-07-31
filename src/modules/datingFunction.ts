export function defaultDateType(stamp: number) {
	return ('<t:' + stamp + '>')
}

export function shortTimeType(stamp: number) {
  return ('<t:' + stamp + ':t>')
}

export function longTimeType(stamp: number) {
  return ('<t:' + stamp + ':T>')
}

export function shortDateType(stamp: number) {
  return ('<t:' + stamp + ':d>')
}

export function longDateType(stamp: number) {
  return ('<t:' + stamp + ':D>')
}

export function shortDateTimeType(stamp: number) {
  return ('<t:' + stamp + ':f>')
}

export function longDateTimeType(stamp: number) {
  return ('<t:' + stamp + ':F>')
}

export function relativeType (stamp: number) {
  return ('<t:' + stamp + ':R>')
}