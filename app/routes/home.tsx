import { Button } from '~/components/ui/button'
import type { Route } from './+types/home'
import { Player } from '~/game/entities/Player'
import { Enemy } from '~/game/entities/Enemy'

export function meta({}: Route.MetaArgs) {
	return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}
const enemy = new Enemy(1, 'Enemy', 100, 100)
const player = new Player('Player', 100, 100, 100, 100, 100)
export default function Home() {
	return (
		<div className='h-full'>
			<Button
				onClick={() => {
					player.heal(10)
					console.log(player.health)
				}}
				variant='default'
				size='lg'>
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
			<Button
				onClick={() => {
					enemy.receiveDmg2((player.health -= 1))
					console.log(player.health)
				}}
				variant='default'
				size='lg'>
				Enemy attack
			</Button>
		</div>
	)
}
