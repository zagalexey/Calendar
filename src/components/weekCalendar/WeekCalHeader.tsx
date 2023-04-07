import React from 'react'
import dayjs from 'dayjs'

import WeekCalHeaderUnit from './WeekCalHeaderUnit'

interface IWeekCalendarHeaderProps {
	week: string[] | null
}

const WeekCalHeader: React.FC<IWeekCalendarHeaderProps> = ({ week }) => {
	return (
		<div className={'h-full w-full grid grid-rows-1 grid-cols-7'}>
			{week &&
				week.map((weekDay) => (
					<WeekCalHeaderUnit key={weekDay} weekday={dayjs(weekDay).format('ddd D')} />
				))}
		</div>
	)
}

export default WeekCalHeader
