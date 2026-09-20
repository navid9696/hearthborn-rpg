import { Outlet } from 'react-router'
import GameFooter from '~/components/layout/GameFooter'
import GameHeader from '~/components/layout/GameHeader'
import GameSideBar from '~/components/layout/GameSideBar'
import pergaminTexture from '../../assets/ui/pergamin.png'
import woodenTextureAside from '../../assets/ui/wooden-aside.webp'
import woodenTexture from '../../assets/ui/wooden-texture.png'

export default function GameLayout() {
	return (
		<div className='h-dvh grid grid-cols-5 grid-rows-16 gap-0'>
			<div
				className='h-full col-span-4 col-start-2 row-start-1 bg-cover'
				style={{ backgroundImage: `url(${woodenTexture})` }}>
				<GameHeader />
			</div>
			<aside className=' h-full row-span-16 row-start-1 flex flex-col bg-cover'>
				<div className='flex h-16 shrink-0 items-center justify-center border-b-6 border-border-default bg-panel-bg'>
					<h6>Navigation</h6>
				</div>
				<div
					className='relative z-10 min-h-0 flex-1 bg-cover'
					style={{ backgroundImage: `url(${woodenTextureAside})` }}>
					<GameSideBar />
					<div className='pointer-events-none absolute inset-0 z-0 bg-black/60'></div>
				</div>
				<div className='flex h-16 shrink-0 items-center justify-center border-t-6 border-border-default bg-panel-bg'>
					<span className='mr-2'>Player</span>
					<span>Lv.10</span>
				</div>
			</aside>
			<main
				className='h-full col-span-4 row-span-14 col-start-2 row-start-2 bg-cover'
				style={{ backgroundImage: `url(${pergaminTexture})` }}>
				<Outlet />
			</main>
			<footer
				className='h-full col-span-4 col-start-2 row-start-16'
				style={{ backgroundImage: `url(${woodenTexture})` }}>
				<GameFooter />
			</footer>
		</div>
	)
}
