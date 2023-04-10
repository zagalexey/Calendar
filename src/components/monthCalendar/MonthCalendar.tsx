import React, { useEffect } from 'react'

import { getMonthDays } from '../../utils/dateUtils'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { putDays } from '../../store/days/daysSlice'

import DayUnit from './DayUnit'
import MonthCalHeader from './MonthCalHeader'

const MonthCalendar: React.FC = () => {
	const dispatch = useAppDispatch()
	const { days, monthToDisplay, yearToDisplay } = useAppSelector((state) => state.days)

	useEffect(() => {
		dispatch(putDays({ days: getMonthDays(yearToDisplay, monthToDisplay) }))
	}, [yearToDisplay, monthToDisplay])

	return (
		<>
			<MonthCalHeader />
			<div className={'grid h-[700px] w-full grid-cols-7 grid-rows-6 bg-calendar'}>
				{days?.map((dayRow) => dayRow.map((day, index) => <DayUnit key={index} day={day} />))}
			</div>
		</>
	)
}

export default MonthCalendar
