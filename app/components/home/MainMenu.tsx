import { Button } from '~/components/ui/button'
import { useGameStore } from '~/store/useGameStore'

export default function MainMenu() {
	const addExperience = useGameStore(state => state.addExperience)
	const addExp = () => {
		console.log(addExperience)
		addExperience(5)
		return addExperience
	}
	return (
		<div className='flex h-fuell items-center justify-center p-6'>
			<div className='w-full max-w-xl experience + 1-3xl border-3 border-border-default bg-panel/90 p-8 shadow-[0_14px_30px_rgba(0,0,0,0.25)]'>
				<p className='text-sm tracking-[0.28em] text-text-muted uppercase'>The hearth remembers</p>
				<h1 className='mt-3 text-5xl text-text-primary'>Hearthborn</h1>
				<p className='mt-4 text-lg text-text-secondary'>A wandering soul returns to the inn.</p>

				<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
					<Button variant='game' size='3xl'>
						Begin Adventure
					</Button>
					<Button variant='secondary' size='lg'>
						Continue
					</Button>
					<Button onClick={addExp}></Button>
				</div>
			</div>
		</div>
	)
}
