import type { StateCreator } from 'zustand'
import { Player } from '~/game/entities/Player'

const getRequiredExperience = (level: number) => 10 + (level - 1) * 35

export type PlayerSlice = {
	player: Player
	setPlayer: (player: Player) => void
	updatePlayer: (patch: Partial<Player>) => void
	addExperience: (amount: number) => void
	getRequiredExperience: (level: number) => number
}

const initialPlayer = new Player(
	'Player', // player name
	100, // current health
	100, // maximum health
	100, // thirst
	100, // hunger
	100, // energy
	100, // maximum energy
	0, // experience points
	1, // current level
	0, // gold
)

export const createPlayerSlice: StateCreator<PlayerSlice> = set => ({
	player: initialPlayer,

	setPlayer: player => set({ player }),

	updatePlayer: patch =>
		set(state => {
			const nextPlayer = Object.assign(
				Object.create(Object.getPrototypeOf(state.player)),
				state.player,
				patch,
			) as Player

			return { player: nextPlayer }
		}),
	addExperience: amount =>
		set(state => {
			let experience = state.player.experience + amount
			let level = state.player.level

			while (experience >= getRequiredExperience(level)) {
				experience -= getRequiredExperience(level)
				level += 1
			}

			const nextPlayer = Object.assign(Object.create(Object.getPrototypeOf(state.player)), state.player, {
				experience,
				level,
			}) as Player

			return { player: nextPlayer }
		}),
	getRequiredExperience: level => getRequiredExperience(level),
})
