export interface EventType {
	id: string
	date: string
	name: string
	startTime: string
	endTime: string
	color: string
}

export interface Color {
	name: string
	value: string
}

export interface FormInput {
	inputName: string
	inputStartH: string
	inputStartM: string
	inputEndH: string
	inputEndM: string
	inputColor: string
}

export enum EVENT_COLORS {
	GREEN = '#03FA82',
	YELLOW = '#FCF582',
	RED = '#FF0000',
	BLUE = '#0060FF',
	PURPLE = '#AB00FF',
	PINK = '#FF00FF',
}

export enum CALENDAR_TYPE {
	MONTH = 'month',
	WEEK = 'week',
}
