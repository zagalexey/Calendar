import React from 'react'

import WeekCalTimelineBlock from './WeekCalTimelineBlock'

interface IWeekCalTimelineProps {
	week: string[] | null
}

const WeekCalTimeline: React.FC<IWeekCalTimelineProps> = ({ week }) => {
	return (
		<div className={'w-full flex justify-between'}>
			{week && week.map((weekDay, index) => <WeekCalTimelineBlock key={index} weekDay={weekDay} />)}
		</div>
	)
}

export default WeekCalTimeline
