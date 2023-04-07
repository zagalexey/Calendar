import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { getMonthDays } from './utils/dateUtils'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { changeEventToggle, putDays, setEventDate, setWeek } from './features/days/daysSlice'

import MonthCalendar from './components/monthCalendar/MonthCalendar'
import WeekCalendar from './components/weekCalendar/WeekCalendar'
import EventForm from './components/molecules/EventForm'
import ControlPanel from './components/ControlPanel'
import weekOfYear from 'dayjs/plugin/weekOfYear'

import './App.css'
import 'tailwindcss/tailwind.css'

dayjs.extend(weekOfYear)

function App() {
	const dispatch = useAppDispatch()
	const { today, yearToDisplay, monthToDisplay, calendarType, addEventToggle } = useAppSelector(
		(state) => state.days
	)

	useEffect(() => {
		dispatch(putDays({ days: getMonthDays(yearToDisplay, monthToDisplay) }))
		dispatch(setWeek(dayjs(today).week()))
	}, [])

	function modalClose() {
		dispatch(changeEventToggle(false))
		dispatch(setEventDate(null))
	}

	return (
		<div className={'w-full h-full relative flex flex-col'}>
			<ControlPanel />
			{calendarType === 'month' ? <MonthCalendar /> : <WeekCalendar />}
			{addEventToggle && (
				<div className={'w-screen h-screen fixed inset-0 z-40'} onClick={modalClose}>
					<EventForm />
				</div>
			)}
		</div>
	)
}

export default App
