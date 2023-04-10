import dayjs from 'dayjs'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import weekOfYear from 'dayjs/plugin/weekOfYear'

import { type EventType } from '../../models'

dayjs.extend(weekOfYear)

interface DaysState {
	days: string[][] | null
	monthToDisplay: number
	yearToDisplay: number
	today: string
	events: EventType[] | null
	calendarType: 'month' | 'week'
	weekNumber: number
	addEventToggle: boolean
	eventDate: string | null
	eventModalToggle: boolean
	eventDetailed: EventType | null
}

const initialState: DaysState = {
	days: null,
	monthToDisplay: new Date().getMonth(),
	yearToDisplay: new Date().getFullYear(),
	weekNumber: dayjs().week(),
	today: dayjs().toISOString(),
	calendarType: 'month',
	events: [
		{
			id: 'f149ccb0-b875-47e2-a2b6-70b11b9022c5',
			date: '2023-04-10',
			name: 'Working on project',
			color: '#03FA82',
			startTime: '10:20',
			endTime: '11:20',
		},
		{
			id: 'f149ccb0-b875-42e2-a2b6-70b11b9022c5',
			date: '2023-04-10',
			name: 'Planning holidays',
			color: '#FCF582',
			startTime: '8:00',
			endTime: '8:30',
		},
		{
			id: 'f149ccb0-b875-47e2-a2b6-70b11b9022c5',
			date: '2023-04-10',
			name: 'Meeting with colleagues',
			color: '#FF0000',
			startTime: '13:20',
			endTime: '14:00',
		},
		{
			id: 'e984bd5a-f854-4faa-9734-6fdaf8933b23',
			date: '2023-04-10',
			name: 'Meeting about new technologies',
			color: '#FBB904',
			startTime: '14:00',
			endTime: '16:00',
		},
		{
			id: 'e984bd5a-f854-4faa-9734-6fda3g933b23',
			date: '2023-04-12',
			name: 'Workout',
			color: '#0060FF',
			startTime: '7:30',
			endTime: '8:30',
		},
		{
			id: 'e984bd5a-f854-4faa-9734-6fsa38933b23',
			date: '2023-04-14',
			name: 'Planning next week',
			color: '#FF00FF',
			startTime: '20:00',
			endTime: '21:30',
		},
	],
	addEventToggle: false,
	eventDate: null,
	eventModalToggle: false,
	eventDetailed: null,
}

const daysSlice = createSlice({
	name: 'days',
	initialState,
	reducers: {
		putDays: (state: DaysState, action: PayloadAction<{ days: string[][] }>) => {
			state.days = action.payload.days
		},
		addEvent: (state: DaysState, action: PayloadAction<EventType>) => {
			state.events !== null ? state.events.push(action.payload) : (state.events = [action.payload])
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
			state.weekNumber !== null && state.weekNumber++
		},
		weekDecrement: (state: DaysState) => {
			state.weekNumber !== null && state.weekNumber--
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
			const updatedEvents = state.events?.filter((event) => event.id !== action.payload)
			if (updatedEvents != null) state.events = updatedEvents
		},
		resetEventForm: (state: DaysState) => {
			state.addEventToggle = false
			state.eventDate = null
		},
		changeEventModalToggle: (state: DaysState, action: PayloadAction<boolean>) => {
			state.eventModalToggle = action.payload
		},
		setEventDetailed: (state: DaysState, action: PayloadAction<EventType | null>) => {
			state.eventDetailed = action.payload
		},
	},
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
	deleteEvent,
	resetEventForm,
	changeEventModalToggle,
	setEventDetailed,
} = daysSlice.actions
