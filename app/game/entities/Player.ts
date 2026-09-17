import { Character } from './Character'

export class Player extends Character {
	thirst: number
	hunger: number
	energy: number

	constructor(name: string, health: number, maxHealth: number, thirst: number, hunger: number, energy: number) {
		super(name, health, maxHealth)
		this.thirst = thirst
		this.hunger = hunger
		this.energy = energy
	}
}
