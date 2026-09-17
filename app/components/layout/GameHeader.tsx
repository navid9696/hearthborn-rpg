import { IconDroplet, IconHeart, IconMeat, IconZzz } from '@tabler/icons-react'

export default function GameHeader() {
	return (
		<header className='h-full flex items-center justify-evenly gap-4 p-4'>
			<IconHeart stroke={2} />
			<IconZzz stroke={2} />
			<IconMeat stroke={2} />
			<IconDroplet stroke={2} />
		</header>
	)
}
