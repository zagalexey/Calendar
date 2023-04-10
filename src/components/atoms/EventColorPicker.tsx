import React from 'react'

import { eventColors } from '../../utils/eventUtils'
import { EVENT_COLORS } from '../../models'

interface IEventColorPickerProps {
	onChange: (value: string) => void
}

const EventColorPicker: React.FC<IEventColorPickerProps> = ({ onChange }) => {
	return (
		<>
			<label htmlFor='color'>Color</label>
			<select
				className={'rounded bg-black p-1'}
				name='color'
				id='color'
				defaultValue={EVENT_COLORS.RED}
				onChange={(e) => {
					onChange(e.target.value)
				}}
			>
				{eventColors.map((color) => (
					<option key={color.name} value={color.value}>
						{color.name}
					</option>
				))}
			</select>
		</>
	)
}

export default EventColorPicker
