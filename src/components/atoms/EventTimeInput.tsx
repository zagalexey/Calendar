import React, { ChangeEvent } from 'react'

interface IEventTimeInputProps {
	min: number
	max: number
	onChange: (value: string) => void
}

const EventTimeInput: React.FC<IEventTimeInputProps> = ({ min, max, onChange }) => {
	return (
		<input
			className={'bg-black'}
			type='number'
			min={min}
			max={max}
			required={true}
			onChange={(e) => onChange(e.target.value)}
		/>
	)
}

export default EventTimeInput
