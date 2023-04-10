import React from 'react'

import './styles.css'

interface IWeekCalTimelineHoursProps {
	day: string
	hour: string
}

const WeekCalTimelineUnit: React.FC<IWeekCalTimelineHoursProps> = ({ day, hour }) => {
	return <div className={'timeline-unit flex h-[2.5rem] w-full items-center justify-center'}></div>
}

export default WeekCalTimelineUnit
