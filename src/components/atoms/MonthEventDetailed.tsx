import React from 'react'
import { EventType } from '../../models'

interface IMonthEventDetailedProps {
	event: EventType
	onClick: (e: any) => void
}

const MonthEventDetailed: React.FC<IMonthEventDetailedProps> = ({ event, onClick }) => {
	return (
		<div
			className={
				'absolute w-full top-0 h-fit px-1 py-2 flex flex-col gap-2 items-start bg-green-500 rounded z-20 opacity-100'
			}
			style={{ backgroundColor: event.color }}
		>
			<span className={'text-xs text-black'}>{event.startTime + ' - ' + event.endTime}</span>
			<div className={'border border-calendar rounded px-1'}>
				<p className={'w-full block text-sm text-black'}>{event.name}</p>
			</div>
			<svg
				className={'absolute top-2 right-2 rounded-full hover:bg-white'}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 48 48'
				width='16px'
				height='16px'
				onClick={(e) => onClick(e)}
			>
				<path fill='#F44336' d='M21.5 4.5H26.501V43.5H21.5z' transform='rotate(45.001 24 24)' />
				<path fill='#F44336' d='M21.5 4.5H26.5V43.501H21.5z' transform='rotate(135.008 24 24)' />
			</svg>
		</div>
	)
}

export default MonthEventDetailed
