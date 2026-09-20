import { GiTwoCoins } from "react-icons/gi";

export default function GameFooter() {
	return (
		<div className='h-full flex items-center justify-evenly gap-4'>
			<div>
				<GiTwoCoins className='inline-block align-top mr-1 text-2xl text-amber-300' />
				<h6 className="inline-block ">1235</h6>
			</div>
			<h6>XP: 1500/2000</h6>
			<h6>12:30PM</h6>
			<h6>Ancient Forest</h6>
		</div>
	)
}
