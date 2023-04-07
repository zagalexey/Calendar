import React from 'react'

interface ITodayButtonProps {
	onTodayHandler: () => void
}

const TodayButton: React.FC<ITodayButtonProps> = ({ onTodayHandler }) => {
	return (
		<button className={'h-full px-4 bg-[#585960]'} onClick={onTodayHandler}>
			Today
		</button>
	)
}

export default TodayButton
