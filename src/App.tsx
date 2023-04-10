import { useEffect } from 'react'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import dayjs from 'dayjs'
import { ToastContainer } from 'react-toastify'

import { useAppDispatch, useAppSelector } from './store/hooks'
import { putDays, resetEventForm, setWeek } from './store/days/daysSlice'

import { getMonthDays } from './utils/dateUtils'
import EventForm from './components/molecules/EventForm'

import ControlPanel from './components/molecules/ControlPanel'

import './App.css'
import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import CalendarView from './components/molecules/CalendarView'
import EventModal from './components/molecules/EventModal'

dayjs.extend(weekOfYear)

function App() {
	const dispatch = useAppDispatch()
	const { today, yearToDisplay, monthToDisplay, addEventToggle, eventModalToggle } = useAppSelector(
		(state) => state.days,
	)

	useEffect(() => {
		dispatch(putDays({ days: getMonthDays(yearToDisplay, monthToDisplay) }))
		dispatch(setWeek(dayjs(today).week()))
	}, [])

	function modalClose(): void {
		dispatch(resetEventForm())
	}

	return (
		<div className={'relative flex h-full w-full flex-col'}>
			<ControlPanel />
			<CalendarView />
			{addEventToggle && <EventForm modalClose={modalClose} />}
			{<ToastContainer />}
			{eventModalToggle && <EventModal />}
		</div>
	)
}

export default App
