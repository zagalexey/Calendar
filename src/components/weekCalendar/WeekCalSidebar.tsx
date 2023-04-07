import React from 'react'

import './styles.css'

const WeekCalSidebar: React.FC = () => {
	return (
		<div className={'h-full'}>
			<div>
				{[...Array(18)].map((_, i) => (
					<div key={i} className={'hour'} style={{ '--hour': i } as React.CSSProperties}>
						{i + 6}
					</div>
				))}
			</div>
			<div className={'divider-container'}>
				{[...Array(19)].map((_, i) => (
					<div key={i} className={'divider'} style={{ '--hour': i } as React.CSSProperties} />
				))}
			</div>
		</div>
	)
}

export default WeekCalSidebar
