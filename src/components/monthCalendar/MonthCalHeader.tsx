import React from 'react'
import MonthCalHeaderUnit from './MonthCalHeaderUnit'

interface IMonthCalendarHeaderProps {}

const MonthCalHeader: React.FC<IMonthCalendarHeaderProps> = ({}) => {
	const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

	return (
		<div className={'h-[40px] grid grid-rows-1 grid-cols-7'}>
			{weekDays.map((weekday) => (
				<MonthCalHeaderUnit key={weekday} weekday={weekday} />
			))}
		</div>
	)
}

export default MonthCalHeader
