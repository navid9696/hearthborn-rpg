type ProgressIconProps = {
	Icon: React.ComponentType<any>
	value: number
	colorClass: string
	emptyClass?: string
	size?: number
	minValue?: number
	maxValue?: number
}

export default function ProgressIcon({
	Icon,
	value,
	colorClass,
	emptyClass = 'text-slate-500/30',
	size = 40,
	minValue = 40,
	maxValue = 50,
}: ProgressIconProps) {
	const normalized = Math.min(Math.max(value, minValue), maxValue)

	const progress = 1 + ((normalized - minValue) / (maxValue - minValue)) * 99
	const fillPercent = 100 - progress

	return (
		<div className='relative' style={{ width: size, height: size }}>
			<Icon size={size} stroke={1} className={emptyClass} fill='currentColor' aria-hidden='true' />

			<div className='absolute inset-0 overflow-hidden' style={{ clipPath: `inset(${fillPercent}% 0 0 0)` }}>
				<Icon size={size} stroke={1} className={colorClass} fill='currentColor' aria-hidden='true' />
			</div>
		</div>
	)
}
