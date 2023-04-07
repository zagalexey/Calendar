import React from 'react'
import dayjs from 'dayjs'

import './styles.css'

interface IWeekCalTimelineHoursProps {
	day: string
	hour: string
}

const WeekCalTimelineUnit: React.FC<IWeekCalTimelineHoursProps> = ({ day, hour }) => {
	return <div className={'w-full h-[2.5rem] flex justify-center timeline-unit items-center'}></div>
}

export default WeekCalTimelineUnit
