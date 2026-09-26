import GameSideBar from './GameSideBar'
import woodenTextureAside from '../../../../assets/ui/wooden-aside.webp'

export default function AsideLayout() {
	return (
		<div className='grid h-full grid-rows-16'>
			<div className='row-start-1 flex items-center justify-center border-b-3  bg-panel'>
				<h6>Navigation</h6>
			</div>

			<div
				className='relative row-span-14 row-start-2 bg-cover'
				style={{
					backgroundImage: `url(${woodenTextureAside})`,
				}}>
				<div className='relative z-10 h-full'>
					<GameSideBar />
				</div>

				<div className='pointer-events-none absolute inset-0 z-0 bg-black/60' />
			</div>

			<div className='row-start-16 flex items-center justify-center border-t-3 bg-panel'>
				<span className='mr-2'>Player</span>
				<span>Lv.10</span>
			</div>
		</div>
	)
}
