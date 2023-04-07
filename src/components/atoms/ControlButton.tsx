import React from 'react'

interface IControlButtonProps {
	controlButtonHandler: (toggleType: 'inc' | 'dec') => void
	buttonType: 'dec' | 'inc'
}

const ControlButton: React.FC<IControlButtonProps> = ({ controlButtonHandler, buttonType }) => {
	const buttonClassName =
		buttonType === 'dec'
			? `h-full px-2 rounded-l bg-[#585960]`
			: `h-full px-2 rounded-r bg-[#585960]`
	const innerText = buttonType === 'dec' ? '<' : '>'

	return (
		<button className={buttonClassName} onClick={() => controlButtonHandler(buttonType)}>
			{innerText}
		</button>
	)
}

export default ControlButton
