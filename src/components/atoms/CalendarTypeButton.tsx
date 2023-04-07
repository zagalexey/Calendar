import React from 'react'

import { changeCalendarType } from '../../features/days/daysSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

interface ICalendarTypeButtonProps {
	buttonType: 'month' | 'week'
}

const CalendarTypeButton: React.FC<ICalendarTypeButtonProps> = ({ buttonType }) => {
	const dispatch = useAppDispatch()
	const { calendarType } = useAppSelector((state) => state.days)

	const className =
		calendarType === buttonType
			? 'h-full w-[90px] rounded bg-white text-black'
			: 'h-full w-[90px] rounded bg-[#20212A] text-white'

	return (
		<button className={className} onClick={() => dispatch(changeCalendarType(buttonType))}>
			{buttonType === 'month' ? 'Month' : 'Week'}
		</button>
	)
}

export default CalendarTypeButton
