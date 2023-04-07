import React, { useEffect } from 'react'

import { getMonthDays } from '../../utils/dateUtils'
import DayUnit from './DayUnit'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { putDays } from '../../features/days/daysSlice'
import MonthCalHeader from './MonthCalHeader'

interface ICalendarProps {}

const MonthCalendar: React.FC<ICalendarProps> = ({}) => {
	const dispatch = useAppDispatch()
	const { days, monthToDisplay, yearToDisplay } = useAppSelector((state) => state.days)

	useEffect(() => {
		dispatch(putDays({ days: getMonthDays(yearToDisplay, monthToDisplay) }))
	}, [yearToDisplay, monthToDisplay])

	return (
		<>
			<MonthCalHeader />
			<div className={'w-full h-[700px] bg-calendar grid grid-cols-7 grid-rows-6'}>
				{days &&
					days.map((dayRow) => dayRow.map((day, index) => <DayUnit key={index} day={day} />))}
			</div>
		</>
	)
}

export default MonthCalendar
