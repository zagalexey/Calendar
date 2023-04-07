import dayjs, { Dayjs } from 'dayjs'

export interface EventType {
	id: string
	date: string
	name: string
	startTime: string
	endTime: string
	color: string
}

export interface HourObjectType {
	hour: string
}

export enum EventColors {
	GREEN = '#03FA82',
	YELLOW = '#FCF582',
	RED = '#FF0000',
	BLUE = '#0060FF',
	PURPLE = '#AB00FF',
	PINK = '#FF00FF'
}
