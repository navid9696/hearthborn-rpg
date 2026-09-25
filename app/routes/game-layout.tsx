import { Outlet } from 'react-router'
import GameFooter from '~/components/layout/GameFooter'
import GameHeader from '~/components/layout/Header/GameHeader'
import pergaminTexture from '../../assets/ui/pergamin.png'
import woodenTexture from '../../assets/ui/wooden-texture.png'
import { useState } from 'react'
import AsideLayout from '~/components/layout/Aside/AsideLayout'
import useIsMobile from '../../hooks/use-is-mobile'
import { Drawer, DrawerContent } from '~/components/ui/drawer'

export default function GameLayout() {
	const [openDrawer, setOpenDrawer] = useState(false)
	const { isMobile } = useIsMobile()

	const handleDrawer = () => {
		setOpenDrawer(prev => !prev)
	}

	return (
		<div className='h-dvh grid grid-cols-1 grid-rows-16 gap-0 lg:grid-cols-5'>
			<div
				className='h-full col-span-1 col-start-1 row-start-1 bg-cover lg:col-span-4 lg:col-start-2'
				style={{ backgroundImage: `url(${woodenTexture})` }}>
				<GameHeader onMenuClick={handleDrawer} />
			</div>

			<aside className='hidden h-full row-span-16 row-start-1 flex-col bg-cover lg:flex'>
				<AsideLayout />
			</aside>
			{isMobile && (
				<Drawer open={openDrawer} onOpenChange={setOpenDrawer} swipeDirection='left'>
					<DrawerContent className='h-full'>
						<aside className='flex h-full flex-col bg-cover'>
							<AsideLayout />
						</aside>
					</DrawerContent>
				</Drawer>
			)}

			<main
				className='h-full col-span-1 row-span-14 col-start-1 row-start-2 bg-cover lg:col-span-4 lg:col-start-2'
				style={{ backgroundImage: `url(${pergaminTexture})` }}>
				<Outlet />
			</main>
			<footer
				className='h-full col-span-1 col-start-1 row-start-16 lg:col-span-4 lg:col-start-2'
				style={{ backgroundImage: `url(${woodenTexture})` }}>
				<GameFooter />
			</footer>
		</div>
	)
}
