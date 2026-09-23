import React, { useState } from 'react'
import GameSideBar from './GameSideBar'
import woodenTextureAside from '../../../../assets/ui/wooden-aside.webp'
import { Drawer, DrawerContent } from '~/components/ui/drawer'

export default function AsideLayout() {
	return (
		<>
			<div className='flex h-16 shrink-0 items-center justify-center border-b-6 border-border-default bg-panel'>
				<h6>Navigation</h6>
			</div>
			<div className='relative z-10 flex-1 bg-cover' style={{ backgroundImage: `url(${woodenTextureAside})` }}>
				<GameSideBar />
				<div className='pointer-events-none absolute inset-0 z-0 bg-black/60'></div>
			</div>
			<div className='flex h-16 shrink-0 items-center justify-center border-t-6 border-border-default bg-panel'>
				<span className='mr-2'>Player</span>
				<span>Lv.10</span>
			</div>
		</>
	)
}
