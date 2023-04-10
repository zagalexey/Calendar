import React from 'react'

interface IMonthCalHeaderUnitProps {
	weekday: string
}

const MonthCalHeaderUnit: React.FC<IMonthCalHeaderUnitProps> = ({ weekday }) => {
	return (
		<div className={'box-border flex items-center justify-center border border-divider'}>
			<span>{weekday}</span>
		</div>
	)
}

export default MonthCalHeaderUnit
