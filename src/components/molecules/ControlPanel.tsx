import React, { useEffect } from 'react'
import dayjs from 'dayjs'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
	monthDecrement,
	monthIncrement,
	putDays,
	setMonth,
	setWeek,
	setYear,
	weekDecrement,
	weekIncrement,
} from '../../store/days/daysSlice'
import { getMonthDays } from '../../utils/dateUtils'

import { CALENDAR_TYPE } from '../../models'

import CalendarTypeButton from '../atoms/CalendarTypeButton'

const ControlPanel: React.FC = () => {
	const { monthToDisplay, yearToDisplay, today, calendarType } = useAppSelector(
		(state) => state.days,
	)
	const dispatch = useAppDispatch()
	const monthName = dayjs().month(monthToDisplay).format('MMMM')

	useEffect(() => {
		todayButtonHandler()
	}, [calendarType])

	function todayButtonHandler() {
		const todayYear = dayjs(today).year()
		const todayMonth = dayjs(today).month()
		const todayWeek = dayjs(today).week()

		switch (calendarType) {
			case CALENDAR_TYPE.MONTH:
				dispatch(putDays({ days: getMonthDays(todayYear, todayMonth) }))
				dispatch(setMonth(todayMonth))
				break
			case CALENDAR_TYPE.WEEK:
				dispatch(setWeek(todayWeek))
				break
			default:
		}
		dispatch(setYear(todayYear))
	}

	function controlButtonHandler(toggleType: 'inc' | 'dec') {
		switch (calendarType) {
			case CALENDAR_TYPE.MONTH:
				toggleType === 'inc' ? dispatch(monthIncrement()) : dispatch(monthDecrement())
				break
			case CALENDAR_TYPE.WEEK:
				toggleType === 'inc' ? dispatch(weekIncrement()) : dispatch(weekDecrement())
				break
			default:
		}
	}

	return (
		<div className={'flex h-[50px] w-full items-center justify-between bg-calendar'}>
			<h1 className={'ml-2 flex gap-2 text-4xl'}>
				<p>{`${monthName} ${yearToDisplay}`}</p>
			</h1>
			<section className={'ml-auto mr-2 flex h-full gap-2 rounded bg-[#20212A] p-2'}>
				<CalendarTypeButton buttonType={'month'} />
				<CalendarTypeButton buttonType={'week'} />
				<button
					className={'h-full rounded-l bg-[#585960] px-2'}
					onClick={() => {
						controlButtonHandler('dec')
					}}
				>
					{'<'}
				</button>
				<button className={'h-full bg-[#585960] px-4'} onClick={todayButtonHandler}>
					Today
				</button>
				<button
					className={'h-full rounded-r bg-[#585960] px-2'}
					onClick={() => {
						controlButtonHandler('inc')
					}}
				>
					{'>'}
				</button>
			</section>
		</div>
	)
}

export default ControlPanel
