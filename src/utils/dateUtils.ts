import dayjs from 'dayjs'

export function getMonthDays(year: number, month = dayjs().month()) {
	const firstDayOfTheMonth = dayjs(new Date(year, month, 0)).day()
	let currentMonthCount = 0 - firstDayOfTheMonth
	return new Array(6).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++
			return dayjs(new Date(year, month, currentMonthCount)).toISOString()
		})
	})
}

export function getWeekDays(year: number, week: number): string[] {
	const weekDays: string[] = []
	for (let i = 1; i <= 7; i++) {
		const day = dayjs().year(year).week(week).day(i)
		weekDays.push(day.toISOString())
	}
	return weekDays
}
