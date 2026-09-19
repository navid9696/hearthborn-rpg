import { Button } from '../ui/button'

export default function GameSideBar() {
	return (
		<div className='h-full flex flex-col items-center justify-center gap-4 p-4'>
			<ul className='flex flex-col items-center justify-center gap-4'>
				<li>
					<Button>World</Button>
				</li>
				<li>
					<Button>Inventory</Button>
				</li>
				<li>
					<Button>Crafting</Button>
				</li>
				<li>
					<Button>Quests</Button>
				</li>
				<li>
					<Button>Character</Button>
				</li>
			</ul>
		</div>
	)
}
