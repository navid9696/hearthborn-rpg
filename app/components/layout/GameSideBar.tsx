import { NavLink } from 'react-router'
import { buttonVariants } from '../ui/button'

export default function GameSideBar() {
	return (
		<nav className='relative z-10 h-full flex flex-col items-center justify-center gap-4 p-4'>
			<ul className='flex flex-col items-center justify-center gap-y-8'>
				<li>
					<NavLink to='/world' className={buttonVariants({ variant: 'default', size: '3xl' })}>
						World
					</NavLink>
				</li>
				<li>
					<NavLink to='/inventory' className={buttonVariants({ variant: 'default', size: '3xl' })}>
						Inventory
					</NavLink>
				</li>
				<li>
					<NavLink to='/crafting' className={buttonVariants({ variant: 'default', size: '3xl' })}>
						Crafting
					</NavLink>
				</li>
				<li>
					<NavLink to='/quests' className={buttonVariants({ variant: 'default', size: '3xl' })}>
						Quests
					</NavLink>
				</li>
				<li>
					<NavLink to='/character' className={`${buttonVariants({ variant: 'default', size: '3xl' })}`}>
						Character
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
