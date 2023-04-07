import React from 'react'

interface IEventNameInputProps {
	onChange: (value: string) => void
}

const EventNameInput: React.FC<IEventNameInputProps> = ({ onChange }) => {
	return (
		<input
			className={'py-1 px-2 rounded bg-black'}
			type='text'
			placeholder={'WeekEvent name'}
			onChange={(e) => onChange(e.target.value)}
			required={true}
		/>
	)
}

export default EventNameInput
