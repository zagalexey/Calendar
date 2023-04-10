import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setMonth, setYear } from '../../store/days/daysSlice'
import { getWeekDays } from '../../utils/dateUtils'

import WeekCalHeader from './WeekCalHeader'
import WeekCalSidebar from './WeekCalSidebar'
import WeekCalTimeline from './WeekCalTimeline'

import './styles.css'

dayjs.extend(weekOfYear)

const WeekCalendar: React.FC = () => {
	const dispatch = useAppDispatch()
	const { yearToDisplay, weekNumber, monthToDisplay } = useAppSelector((state) => state.days)
	const [week, setWeek] = useState<string[] | null>(null)

	useEffect(() => {
		const weekDays = getWeekDays(2023, weekNumber)
		setWeek(weekDays)
	}, [])

	useEffect(() => {
		const weekDays = getWeekDays(2023, weekNumber)
		const firstWeekDay = weekDays[0]
		const firstWeekDayMonth = dayjs(firstWeekDay).month()
		const firstWeekDayYear = dayjs(firstWeekDay).year()
		if (firstWeekDayMonth !== monthToDisplay) {
			dispatch(setMonth(firstWeekDayMonth))
		}
		if (firstWeekDayYear !== yearToDisplay) {
			dispatch(setYear(firstWeekDayYear))
		}
		setWeek(weekDays)
	}, [weekNumber])

	return (
		<div className={'week-calendar h-full w-full'}>
			<WeekCalSidebar />
			<WeekCalHeader week={week} />
			<WeekCalTimeline week={week} />
		</div>
	)
}

export default WeekCalendar
