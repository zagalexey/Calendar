import React from 'react'

import MonthCalHeaderUnit from './MonthCalHeaderUnit'

const MonthCalHeader: React.FC = () => {
	const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

	return (
		<div className={'grid h-[40px] grid-cols-7 grid-rows-1'}>
			{weekDays.map((weekday) => (
				<MonthCalHeaderUnit key={weekday} weekday={weekday} />
			))}
		</div>
	)
}

export default MonthCalHeader
