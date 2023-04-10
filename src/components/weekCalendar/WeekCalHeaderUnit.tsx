import React from 'react'

interface IWeekCalHeaderUnitProps {
	weekday: string
}

const WeekCalHeaderUnit: React.FC<IWeekCalHeaderUnitProps> = ({ weekday }) => {
	return (
		<div className={'box-border flex items-center justify-center border border-divider'}>
			<span>{weekday}</span>
		</div>
	)
}

export default WeekCalHeaderUnit
