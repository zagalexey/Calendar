import React from 'react'
import { EventColors } from '../../models'

interface IEventColorPickerProps {
	onChange: (value: string) => void
}

const EventColorPicker: React.FC<IEventColorPickerProps> = ({ onChange }) => {
	return (
		<>
			<label htmlFor='color'>Pick color</label>
			<select
				className={'bg-black'}
				name='color'
				id='color'
				defaultValue={EventColors.RED}
				onChange={(e) => onChange(e.target.value)}
			>
				<option value={EventColors.RED}>Red</option>
				<option value={EventColors.GREEN}>Green</option>
				<option value={EventColors.BLUE}>Blue</option>
				<option value={EventColors.PURPLE}>Purple</option>
				<option value={EventColors.PINK}>Pink</option>
				<option value={EventColors.YELLOW}>Yellow</option>
			</select>
		</>
	)
}

export default EventColorPicker
