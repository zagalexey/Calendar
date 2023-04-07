import { configureStore } from '@reduxjs/toolkit'

import dayReducer from '../features/days/daysSlice'

export const store = configureStore({
	reducer: {
		days: dayReducer
	}
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
