import dayjs from 'dayjs'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventType } from '../../models'

interface DaysState {
	days: string[][] | null
	monthToDisplay: number
	yearToDisplay: number
	today: string
	events: EventType[] | null
	calendarType: 'month' | 'week'
	weekNumber: number | null
	addEventToggle: boolean
	eventDate: string | null
}

const initialState: DaysState = {
	days: null,
	monthToDisplay: new Date().getMonth(),
	yearToDisplay: new Date().getFullYear(),
	weekNumber: null,
	today: dayjs().toISOString(),
	calendarType: 'month',
	events: [
		{
			id: 'f149ccb0-b875-47e2-a2b6-70b11b9022c5',
			date: '2023-04-04',
			name: 'New event',
			color: '#FBB904',
			startTime: '10:20',
			endTime: '11:20'
		},
		{
			id: 'e984bd5a-f854-4faa-9734-6fdaf8933b23',
			date: '2023-04-04',
			name: 'Meeting about the development process',
			color: '#FBB904',
			startTime: '13:30',
			endTime: '14:00'
		},
		{
			id: 'e984bd5a-f854-4faa-9734-6fda3g933b23',
			date: '2023-04-04',
			name: 'Meetingsdafdfadfdsfsgsdagdsagdsgdsgasd',
			color: '#FBB904',
			startTime: '15:30',
			endTime: '17:45'
		},
		{
			id: 'e984bd5a-f854-4faa-9734-6fsa38933b23',
			date: '2023-04-04',
			name: 'Meetingsdafdfadfdsfsgsdagdsagdsgdsgasd',
			color: '#FBB904',
			startTime: '20:00',
			endTime: '22:10'
		}
	],
	addEventToggle: false,
	eventDate: null
}

const daysSlice = createSlice({
	name: 'days',
	initialState,
	reducers: {
		putDays: (state: DaysState, action: PayloadAction<{ days: string[][] }>) => {
			state.days = action.payload.days
		},
		addEvent: (state: DaysState, action: PayloadAction<EventType>) => {
			state.events ? state.events.push(action.payload) : (state.events = [action.payload])
		},
		monthIncrement: (state: DaysState) => {
			if (state.monthToDisplay >= 11) {
				state.monthToDisplay = 0
				state.yearToDisplay++
			} else {
				state.monthToDisplay++
			}
		},
		monthDecrement: (state: DaysState) => {
			if (state.monthToDisplay <= 0) {
				state.monthToDisplay = 11
				state.yearToDisplay--
			} else {
				state.monthToDisplay--
			}
		},
		weekIncrement: (state: DaysState) => {
			state.weekNumber && state.weekNumber++
		},
		weekDecrement: (state: DaysState) => {
			state.weekNumber && state.weekNumber--
		},
		setMonth: (state: DaysState, action: PayloadAction<number>) => {
			state.monthToDisplay = action.payload
		},
		setYear: (state: DaysState, action: PayloadAction<number>) => {
			state.yearToDisplay = action.payload
		},
		setWeek: (state: DaysState, action: PayloadAction<number>) => {
			state.weekNumber = action.payload
		},
		setEventDate: (state: DaysState, action: PayloadAction<string | null>) => {
			state.eventDate = action.payload
		},
		changeCalendarType: (state: DaysState, action: PayloadAction<'month' | 'week'>) => {
			state.calendarType = action.payload
		},
		changeEventToggle: (state: DaysState, action: PayloadAction<boolean>) => {
			state.addEventToggle = action.payload
		},
		deleteEvent: (state: DaysState, action: PayloadAction<string>) => {
			const updatedEvents = state.events?.filter((event) => event.id != action.payload)
			if (updatedEvents) state.events = updatedEvents
		}
	}
})

export default daysSlice.reducer
export const {
	putDays,
	monthIncrement,
	monthDecrement,
	setMonth,
	setYear,
	changeCalendarType,
	weekIncrement,
	weekDecrement,
	setWeek,
	changeEventToggle,
	setEventDate,
	addEvent,
	deleteEvent
} = daysSlice.actions
