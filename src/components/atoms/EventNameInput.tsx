import React from 'react'

interface IEventNameInputProps {
	onChange: (value: string) => void
}

const EventNameInput: React.FC<IEventNameInputProps> = ({ onChange }) => {
	return (
		<input
			className={'rounded bg-black px-2 py-1'}
			type='text'
			placeholder={'New event'}
			onChange={(e) => {
				onChange(e.target.value)
			}}
			required={true}
		/>
	)
}

export default EventNameInput
