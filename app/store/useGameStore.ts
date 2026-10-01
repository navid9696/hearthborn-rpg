import { create } from 'zustand'
import { createPlayerSlice, type PlayerSlice } from './slices/playerSlice'

export const useGameStore = create<PlayerSlice>((...args) => ({
	...createPlayerSlice(...args),
}))
