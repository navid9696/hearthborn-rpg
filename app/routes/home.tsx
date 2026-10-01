import type { Route } from './+types/home'
import MainMenu from '~/components/home/MainMenu'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Hearthborn RPG | Main Menu' },
		{ name: 'description', content: 'Enter the tavern, begin your adventure, and shape your fate.' },
	]
}

const home = () => {
	return <MainMenu />
}

export default home
