import woodenTexture from '../../../assets/ui/wooden-texture.png'

export default function GameFooter() {
	return (
		<div className='h-full flex items-center justify-evenly gap-4' style={{ backgroundImage: `url(${woodenTexture})` }}>
			<p>1234</p>
			<p>XP: 1500/2000</p>
			<p>12:30PM</p>
			<p>Ancient Forest</p>
		</div>
	)
}
