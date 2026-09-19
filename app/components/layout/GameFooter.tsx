import woodenTexture from '../../../assets/ui/wooden-texture.png'

export default function GameFooter() {
	return (
		<div className='h-full flex items-center justify-evenly gap-4' style={{ backgroundImage: `url(${woodenTexture})` }}>
			<h6>1234</h6>
			<h6>XP: 1500/2000</h6>
			<h6>12:30PM</h6>
			<h6>Ancient Forest</h6>
		</div>
	)
}
