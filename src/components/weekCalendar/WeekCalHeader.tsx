import React from 'react'
import dayjs from 'dayjs'

import WeekCalHeaderUnit from './WeekCalHeaderUnit'

interface IWeekCalendarHeaderProps {
	week: string[] | null
}

const WeekCalHeader: React.FC<IWeekCalendarHeaderProps> = ({ week }) => {
	return (
		<div className={'header'}>
			<div className={'grid h-full w-full grid-cols-7 grid-rows-1'}>
				{week?.map((weekDay) => (
					<WeekCalHeaderUnit key={weekDay} weekday={dayjs(weekDay).format('ddd D')} />
				))}
			</div>
		</div>
	)
}

export default WeekCalHeader
