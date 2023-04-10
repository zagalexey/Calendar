import React from 'react'

import './styles.css'

const WeekCalSidebar: React.FC = () => {
	const workHours = 18
	const dividerCount = 19

	return (
		<div className={'sidebar relative h-full bg-calendar'}>
			<div className={'h-full'}>
				<div>
					{[...Array(workHours)].map((_, i) => (
						<div key={i} className={'hour'} style={{ '--hour': i } as React.CSSProperties}>
							{i + 6}
						</div>
					))}
				</div>
				<div className={'divider-container'}>
					{[...Array(dividerCount)].map((_, i) => (
						<div key={i} className={'divider'} style={{ '--hour': i } as React.CSSProperties} />
					))}
				</div>
			</div>
		</div>
	)
}

export default WeekCalSidebar
