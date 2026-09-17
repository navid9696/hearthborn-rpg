import { Button } from '~/components/ui/button'
import type { Route } from './+types/home'
import { Player } from '~/game/entities/Player'
import pergaminTexture from '../../assets/ui/pergamin-texture.png'

export function meta({}: Route.MetaArgs) {
	return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

const player = new Player('Player', 100, 100, 50, 50, 100)
export default function Home() {
	return (
		<div
			className='h-full bg-cover bg-center'
			style={{
				backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url(${pergaminTexture})`,
			}}>
			<Button variant='default' size='lg'>
				Heal
			</Button>
			<Button
				onClick={() => {
					player.takeDamage(1)
					console.log(player.health)
				}}
				variant='default'
				size='lg'>
				Receive Damage
			</Button>
			<Button variant='default' size='lg'>
				Increase Max Health
			</Button>
		</div>
	)
}
