import React, { useEffect } from 'react'
import dayjs from 'dayjs'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
	monthDecrement,
	monthIncrement,
	putDays,
	setMonth,
	setWeek,
	setYear,
	weekDecrement,
	weekIncrement
} from '../features/days/daysSlice'
import { getMonthDays } from '../utils/dateUtils'

import TodayButton from './atoms/TodayButton'
import ControlButton from './atoms/ControlButton'
import CalendarTypeButton from './atoms/CalendarTypeButton'

const ControlPanel: React.FC = () => {
	const { monthToDisplay, yearToDisplay, today, calendarType } = useAppSelector(
		(state) => state.days
	)
	const dispatch = useAppDispatch()
	const monthName = dayjs().month(monthToDisplay).format('MMMM')

	useEffect(() => {
		todayButtonHandler()
	}, [calendarType])

	function todayButtonHandler() {
		const todayYear = dayjs(today).year()
		if (calendarType === 'month') {
			const todayMonth = dayjs(today).month()
			dispatch(putDays({ days: getMonthDays(todayYear, todayMonth) }))
			dispatch(setMonth(todayMonth))
		} else {
			const todayWeek = dayjs(today).week()
			dispatch(setWeek(todayWeek))
		}
		dispatch(setYear(todayYear))
	}

	function controlButtonHandler(toggleType: 'inc' | 'dec') {
		if (calendarType === 'month') {
			toggleType === 'inc' ? dispatch(monthIncrement()) : dispatch(monthDecrement())
		} else {
			toggleType === 'inc' ? dispatch(weekIncrement()) : dispatch(weekDecrement())
		}
	}

	return (
		<div className={'flex items-center justify-between w-full bg-green-500 h-[50px]'}>
			<h1 className={'flex gap-2 ml-2 text-4xl'}>
				<span>{monthName}</span>
				<span>{yearToDisplay}</span>
			</h1>
			<section className={'flex gap-2 mr-2 bg-[#20212A] h-full ml-auto rounded p-2'}>
				<CalendarTypeButton buttonType={'month'} />
				<CalendarTypeButton buttonType={'week'} />
				<ControlButton controlButtonHandler={controlButtonHandler} buttonType={'dec'} />
				<TodayButton onTodayHandler={todayButtonHandler} />
				<ControlButton controlButtonHandler={controlButtonHandler} buttonType={'inc'} />
			</section>
		</div>
	)
}

export default ControlPanel
