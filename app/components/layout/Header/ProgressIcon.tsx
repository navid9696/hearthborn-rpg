type ProgressIconProps = {
	Icon: React.ComponentType<any>
	value: number
	colorClass: string
	emptyClass?: string
	size?: number
	minValue?: number
	maxValue?: number
	minFill?: number
	maxFill?: number
}

export default function ProgressIcon({
	Icon,
	value,
	colorClass,
	emptyClass = 'text-slate-400/30',
	size = 30,
	minValue = 0,
	maxValue = 100,
	minFill = 0,
	maxFill = 100,
}: ProgressIconProps) {
	const normalized = Math.min(Math.max(value, minValue), maxValue)
	const safeMinFill = Math.min(minFill, maxFill)
	const safeMaxFill = Math.max(minFill, maxFill)
	const progress = safeMinFill + ((normalized - minValue) / (maxValue - minValue)) * (safeMaxFill - safeMinFill)
	const fillPercent = 100 - progress

	return (
		<div className='relative' style={{ width: size, height: size }}>
			<Icon size={size} stroke={1} className={emptyClass} fill='currentColor' aria-hidden='true' />

			<div
				className='absolute inset-0 overflow-hidden'
				style={{
					clipPath: `inset(${fillPercent}% 0 0 0)`,
				}}>
				<Icon size={size} stroke={1} className={colorClass} fill='currentColor' aria-hidden='true' />
			</div>
		</div>
	)
}
