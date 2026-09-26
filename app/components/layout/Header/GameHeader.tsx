import { IconDroplet, IconHeart, IconApple, IconBatteryVertical } from '@tabler/icons-react'
import { Divide as Hamburger } from 'hamburger-react'
import ProgressIcon from './ProgressIcon'

type GameHeaderProps = {
	onMenuClick?: () => void
	isOpen?: boolean
}

export default function GameHeader({ onMenuClick, isOpen }: GameHeaderProps) {
	return (
		<header className='flex h-full items-center px-2'>
			<div className='flex shrink-0 items-center justify-center lg:hidden'>
				<Hamburger toggled={isOpen} toggle={onMenuClick} size={32} />
			</div>

			<div className='flex h-full flex-1 items-center justify-evenly'>
				<div className='flex flex-col md:flex-row items-center justify-center'>
					<ProgressIcon Icon={IconHeart} value={50} minFill={15} maxFill={85} colorClass='text-red-900 fill-red-600' />
					<span className='-mt-1.75 md:m-0 text-sm text-red-600'>11/100</span>
				</div>

				<div className='flex flex-col md:flex-row items-center justify-center'>
					<ProgressIcon
						Icon={IconBatteryVertical}
						value={75}
						minFill={15}
						maxFill={85}
						colorClass='text-yellow-800 fill-yellow-500'
					/>
					<span className='-mt-1.75 md:m-0 text-sm text-yellow-500'>22/100</span>
				</div>

				<div className='flex flex-col md:flex-row items-center justify-center'>
					<ProgressIcon
						Icon={IconDroplet}
						value={25}
						minFill={11}
						maxFill={89}
						colorClass='text-blue-700 fill-blue-400'
					/>
					<span className='-mt-1.75 md:m-0 text-sm text-blue-400'>33/100</span>
				</div>

				<div className='flex flex-col md:flex-row items-center justify-center'>
					<ProgressIcon
						Icon={IconApple}
						value={66}
						minFill={11}
						maxFill={89}
						colorClass='text-green-800 fill-green-500'
					/>
					<span className='-mt-1.75 md:m-0 text-sm text-green-500'>44/100</span>
				</div>
			</div>
		</header>
	)
}
