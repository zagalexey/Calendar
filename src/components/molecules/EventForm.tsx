import React, { type FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addEvent, resetEventForm } from '../../store/days/daysSlice'
import { EVENT_COLORS, type FormInput } from '../../models'

import './eventForm.css'
import EventTimeInput from '../atoms/EventTimeInput'
import EventNameInput from '../atoms/EventNameInput'
import EventColorPicker from '../atoms/EventColorPicker'
import { checkForEventsOverlap, isTimeValid, createNewEvent } from '../../utils/eventUtils'

interface EventFormProps {
	modalClose: () => void
}

const EventForm: React.FC<EventFormProps> = ({ modalClose }) => {
	const dispatch = useAppDispatch()
	const { eventDate, events } = useAppSelector((state) => state.days)

	const [formInput, setFormInput] = useState<FormInput>({
		inputName: '',
		inputStartH: '',
		inputStartM: '',
		inputEndH: '',
		inputEndM: '',
		inputColor: EVENT_COLORS.RED,
	})

	function eventFormAdd(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const startTime = `${formInput.inputStartH}:${formInput.inputStartM}`
		const endTime = `${formInput.inputEndH}:${formInput.inputEndM}`

		const startTimeFloat = parseInt(formInput.inputStartH) + parseInt(formInput.inputStartM) / 60
		const endTimeFloat = parseInt(formInput.inputEndH) + parseInt(formInput.inputEndH) / 60

		const newEvent = createNewEvent(
			eventDate!,
			formInput.inputName,
			startTime,
			endTime,
			formInput.inputColor,
		)
		if (isTimeValid(startTimeFloat, endTimeFloat) && checkForEventsOverlap(events, newEvent)) {
			dispatch(addEvent(newEvent))
			dispatch(resetEventForm())
		} else {
			toast.warn('Wrong time or time overlapped!', {
				position: 'bottom-left',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			})
		}
	}

	return (
		<div className={'fixed inset-0 z-40 h-screen w-screen'} onClick={modalClose}>
			<form
				className={
					'absolute left-1/2 top-1/2 z-50 flex h-[200px] w-1/5 -translate-x-1/2 -translate-y-1/2 flex-col justify-evenly gap-2 rounded border border-white bg-modal px-4 py-4 text-white'
				}
				onClick={(e) => {
					e.stopPropagation()
				}}
				onSubmit={(e) => {
					eventFormAdd(e)
				}}
			>
				<EventNameInput
					onChange={(name) => {
						setFormInput({ ...formInput, inputName: name })
					}}
				/>
				<section className={'flex justify-between'}>
					<div>
						<EventTimeInput
							min={6}
							max={23}
							onChange={(time) => {
								setFormInput({ ...formInput, inputStartH: time })
							}}
							placeholder={'9'}
						/>
						<span>:</span>
						<EventTimeInput
							min={0}
							max={59}
							onChange={(time) => {
								setFormInput({ ...formInput, inputStartM: time })
							}}
							placeholder={'00'}
						/>
					</div>
					<div>
						<EventTimeInput
							min={6}
							max={23}
							onChange={(time) => {
								setFormInput({ ...formInput, inputEndH: time })
							}}
							placeholder={'10'}
						/>
						<span>:</span>
						<EventTimeInput
							min={0}
							max={59}
							onChange={(time) => {
								setFormInput({ ...formInput, inputEndM: time })
							}}
							placeholder={'00'}
						/>
					</div>
				</section>
				<section className={'flex justify-between'}>
					<EventColorPicker
						onChange={(color) => {
							setFormInput({ ...formInput, inputColor: color })
						}}
					/>
				</section>
				<section className={'flex justify-between gap-2'}>
					<button
						className={'w-1/2 rounded bg-red-600 py-1'}
						onClick={() => dispatch(resetEventForm())}
					>
						Cancel
					</button>
					<button type={'submit'} className={'w-1/2 rounded bg-green-700'}>
						Add
					</button>
				</section>
			</form>
		</div>
	)
}

export default EventForm
