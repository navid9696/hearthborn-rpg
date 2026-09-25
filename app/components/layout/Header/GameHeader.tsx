import { IconDroplet, IconHeart, IconApple, IconBatteryVertical } from '@tabler/icons-react'
import { Divide as Hambuger } from 'hamburger-react'
import ProgressIcon from './ProgressIcon'

type GameHeaderProps = {
	onMenuClick?: () => void
}

export default function GameHeader({ onMenuClick }: GameHeaderProps) {
	return (
		<header className='h-full flex items-center justify-evenly gap-4 p-4'>
			<button className='lg:hidden' onClick={onMenuClick}>
				<Hambuger />
			</button>

			<IconHeart size={40} stroke={1} fill='currentColor' className='text-red-900 fill-red-600' />
			<ProgressIcon Icon={IconBatteryVertical} value={1} colorClass='text-yellow-800 fill-yellow-500' />
			<IconBatteryVertical size={45} stroke={1} fill='currentColor' className='text-yellow-800 fill-yellow-500' />
			<ProgressIcon Icon={IconApple} value={50} colorClass='text-green-800 fill-green-500' />
			<IconApple size={45} stroke={1} fill='currentColor' className='text-green-800 fill-green-500' />
			<IconDroplet size={40} stroke={1} fill='currentColor' className='text-blue-700 fill-blue-400' />
		</header>
	)
}
