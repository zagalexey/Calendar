import React from 'react'

interface IMonthCalHeaderUnitProps {
	weekday: string
}

const MonthCalHeaderUnit: React.FC<IMonthCalHeaderUnitProps> = ({ weekday }) => {
	return (
		<div className={'box-border border border-white flex justify-center items-center'}>
			<span>{weekday}</span>
		</div>
	)
}

export default MonthCalHeaderUnit
