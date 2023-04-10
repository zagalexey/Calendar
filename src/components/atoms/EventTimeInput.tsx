import React from 'react'

interface IEventTimeInputProps {
	min: number
	max: number
	onChange: (value: string) => void
	placeholder: string
}

const EventTimeInput: React.FC<IEventTimeInputProps> = ({ min, max, onChange, placeholder }) => {
	return (
		<input
			className={'rounded border-divider border-white bg-black p-1 text-center'}
			type='number'
			min={min}
			max={max}
			required={true}
			onChange={(e) => {
				onChange(e.target.value)
			}}
			placeholder={placeholder}
		/>
	)
}

export default EventTimeInput
