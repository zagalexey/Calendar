import React, { FormEvent, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addEvent, changeEventToggle, setEventDate } from '../../features/days/daysSlice'
import { EventColors } from '../../models'

import './eventForm.css'
import EventTimeInput from '../atoms/EventTimeInput'
import EventNameInput from '../atoms/EventNameInput'
import EventColorPicker from '../atoms/EventColorPicker'
import { checkForEventsOverlap, checkIfTimeValid, createNewEvent } from '../../utils/eventUtils'

const EventForm: React.FC = () => {
	const dispatch = useAppDispatch()
	const { eventDate, events } = useAppSelector((state) => state.days)

	const [inputName, setInputName] = useState<string>('')
	const [inputStartH, setInputStartH] = useState<string>('')
	const [inputStartM, setInputStartM] = useState<string>('')
	const [inputEndH, setInputEndH] = useState<string>('')
	const [inputEndM, setInputEndM] = useState<string>('')
	const [inputColor, setInputColor] = useState<string>(EventColors.RED)

	function eventFormCancel() {
		dispatch(changeEventToggle(false))
		dispatch(setEventDate(null))
	}

	function eventFormAdd(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const newEvent = createNewEvent(
			eventDate!,
			inputName,
			`${inputStartH}:${inputStartM}`,
			`${inputEndH}:${inputEndM}`,
			inputColor
		)
		if (
			checkIfTimeValid(inputStartH, inputStartM, inputEndH, inputEndM) &&
			checkForEventsOverlap(events, newEvent)
		) {
			dispatch(addEvent(newEvent))
			dispatch(setEventDate(null))
			dispatch(changeEventToggle(false))
		} else {
			alert('Wrong time!')
		}
	}

	return (
		<form
			className={
				'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-4 py-4 z-50 flex flex-col gap-2 bg-amber-700'
			}
			onClick={(e) => e.stopPropagation()}
			onSubmit={(e) => eventFormAdd(e)}
		>
			<EventNameInput onChange={setInputName} />
			<section className={'flex justify-between'}>
				<div>
					<EventTimeInput min={6} max={23} onChange={setInputStartH} />
					<span>:</span>
					<EventTimeInput min={0} max={59} onChange={setInputStartM} />
				</div>
				<div>
					<EventTimeInput min={6} max={23} onChange={setInputEndH} />
					<span>:</span>
					<EventTimeInput min={0} max={59} onChange={setInputEndM} />
				</div>
			</section>
			<section className={'flex justify-between'}>
				<EventColorPicker onChange={setInputColor} />
			</section>
			<section className={'flex gap-2 justify-between'}>
				<button className={'bg-red-600 w-1/2'} onClick={eventFormCancel}>
					Cancel
				</button>
				<button type={'submit'} className={'bg-green-700 w-1/2'}>
					Add
				</button>
			</section>
		</form>
	)
}

export default EventForm
