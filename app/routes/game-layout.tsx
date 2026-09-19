import { Outlet } from 'react-router'
import GameFooter from '~/components/layout/GameFooter'
import GameHeader from '~/components/layout/GameHeader'
import GameSideBar from '~/components/layout/GameSideBar'
import pergaminTexture from '../../assets/ui/pergamin.png'

export default function GameLayout() {
	return (
		<div className='h-dvh grid grid-cols-5 grid-rows-16 gap-0'>
			<div className='h-full flex justify-center items-center col-start-1 row-start-1 bg-panel-bg border-b-6 border-r-6 border-border-default'>
				<h6>Navigation</h6>
			</div>
			<div className='h-full col-span-4 col-start-2 row-start-1'>
				<GameHeader />
			</div>
			<aside className='h-full row-span-14 row-start-2  bg-blue-800'>
				<GameSideBar />
			</aside>
			<main
				className='h-full col-span-4 row-span-14 col-start-2 row-start-2'
				style={{ backgroundImage: `url(${pergaminTexture})` }}>
				<Outlet />
			</main>
			<div className='h-full flex justify-center items-center col-start-1 row-start-16 bg-panel-bg border-t-6 border-r-6 border-border-default'>
				<span className='mr-2'>Player</span>
				<span>Lv.10</span>
			</div>
			<footer className='h-full col-span-4 col-start-2 row-start-16'>
				<GameFooter />
			</footer>
		</div>
	)
}
