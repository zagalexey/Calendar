import React from 'react'

interface IWeekCalHeaderUnitProps {
	weekday: string
}

const WeekCalHeaderUnit: React.FC<IWeekCalHeaderUnitProps> = ({ weekday }) => {
	return (
		<div className={'flex justify-center items-center'}>
			<span>{weekday}</span>
		</div>
	)
}

export default WeekCalHeaderUnit
