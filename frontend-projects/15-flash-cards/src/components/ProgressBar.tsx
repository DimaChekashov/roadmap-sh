type ProgressBarType = {
	currentIndex: number;
	totalCards: number;
}

export const ProgressBar = ({ currentIndex, totalCards }: ProgressBarType) => {
	const formattedPercentage = (((currentIndex + 1) / totalCards) * 100).toFixed(0);

	return (
		<div className="progress-container">
			<div className='progress-bar-container'>
				<div className="progress-bar" style={{ width: `${formattedPercentage}%` }}>
					<p className='percentage'>{formattedPercentage}%</p>
				</div>
			</div>

			<div style={{ margin: '0 8px', flexShrink: '0' }}>{currentIndex + 1} of {totalCards}</div>
		</div>
	);
}
