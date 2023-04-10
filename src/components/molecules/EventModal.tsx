import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeEventModalToggle, setEventDetailed } from '../../store/days/daysSlice'

import CloseIcon from '../../assets/close_icon.svg'

const EventModal: React.FC = () => {
	const { eventDetailed } = useAppSelector((state) => state.days)
	const dispatch = useAppDispatch()

	function closeEventModal() {
		dispatch(setEventDetailed(null))
		dispatch(changeEventModalToggle(false))
	}

	return (
		<div className={'fixed inset-0 z-40 h-screen w-screen'} onClick={closeEventModal}>
			<div
				className={
					'absolute left-1/2 top-1/2 z-50 flex h-[200px] w-1/4 -translate-x-1/2 -translate-y-1/2 flex-col justify-evenly  rounded border border-white bg-modal px-4 py-4 text-white'
				}
			>
				<h2 className={'mb-4 text-xl'}>{eventDetailed?.name}</h2>
				<p>
					Date: <span className={'rounded border border-white p-1'}>{eventDetailed?.date}</span>
				</p>
				<p>
					Time:{' '}
					<span className={'rounded border border-white p-1'}>{eventDetailed?.startTime}</span> to{' '}
					<span className={'rounded border border-white p-1'}>{eventDetailed?.endTime}</span>
				</p>
				<img
					className={'absolute right-2 top-2 h-[20px] w-[20px] rounded bg-white hover:scale-110'}
					src={CloseIcon}
					alt='CloseIcon'
					onClick={closeEventModal}
				/>
			</div>
		</div>
	)
}

export default EventModal
