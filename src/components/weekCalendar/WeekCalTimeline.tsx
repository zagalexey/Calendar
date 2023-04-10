import React from 'react'

import WeekCalTimelineBlock from './WeekCalTimelineBlock'

import './styles.css'

interface IWeekCalTimelineProps {
	week: string[] | null
}

const WeekCalTimeline: React.FC<IWeekCalTimelineProps> = ({ week }) => {
	return (
		<div className={'content'}>
			<div className={'flex w-full justify-between'}>
				{week?.map((weekDay, index) => (
					<WeekCalTimelineBlock key={index} weekDay={weekDay} />
				))}
			</div>
		</div>
	)
}

export default WeekCalTimeline
