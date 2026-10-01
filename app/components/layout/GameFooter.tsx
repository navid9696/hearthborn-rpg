import { GiTwoCoins } from 'react-icons/gi'
import { useGameStore } from '~/store/useGameStore'

export default function GameFooter() {
	const { experience, gold } = useGameStore(state => state.player)
	const requiredExperience = useGameStore(state => state.getRequiredExperience(state.player.level))

	return (
		<div className='h-full flex items-center justify-evenly gap-4'>
			<div>
				<GiTwoCoins className='inline-block align-top mr-1 text-2xl text-amber-300' />
				<h6 className='inline-block '>{gold}</h6>
			</div>
			<h6>XP: {`${experience}/${requiredExperience}`}</h6>
			<h6>12:30PM</h6>
			<h6>Ancient Forest</h6>
		</div>
	)
}
