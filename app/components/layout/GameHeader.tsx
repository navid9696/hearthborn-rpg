import { IconDroplet, IconHeart, IconApple, IconBatteryVertical } from '@tabler/icons-react'
import { Divide } from 'hamburger-react'

export default function GameHeader() {
	return (
		<header className='h-full flex items-center justify-evenly gap-4 p-4'>
			<div className='lg:hidden'>
				<Divide />
			</div>

			<IconHeart size={40} stroke={1} fill='currentColor' className='text-red-900 fill-red-600' />
			<IconBatteryVertical size={45} stroke={1} fill='currentColor' className='text-yellow-800 fill-yellow-500' />
			<IconApple size={45} stroke={1} fill='currentColor' className='text-green-800 fill-green-500' />
			<IconDroplet size={40} stroke={1} fill='currentColor' className='text-blue-700 fill-blue-400' />
		</header>
	)
}
