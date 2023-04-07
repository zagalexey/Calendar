import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setMonth, setYear } from '../../features/days/daysSlice'
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
		const weekDays = getWeekDays(2023, weekNumber!)
		setWeek(weekDays)
	}, [])

	useEffect(() => {
		const weekDays = getWeekDays(2023, weekNumber!)
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
		<div className={'w-full h-full week-calendar'}>
			<div className={'h-full relative sidebar'}>
				<WeekCalSidebar />
			</div>
			<div className={'header'}>{week && <WeekCalHeader week={week} />}</div>
			<div className={'content'}>
				<WeekCalTimeline week={week} />
			</div>
		</div>
	)
}

export default WeekCalendar
