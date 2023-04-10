import React from 'react'

import { useAppSelector } from '../../store/hooks'
import MonthCalendar from '../monthCalendar/MonthCalendar'
import WeekCalendar from '../weekCalendar/WeekCalendar'

const CalendarView: React.FC = () => {
	const { calendarType } = useAppSelector((state) => state.days)
	return <>{calendarType === 'month' ? <MonthCalendar /> : <WeekCalendar />}</>
}

export default CalendarView
