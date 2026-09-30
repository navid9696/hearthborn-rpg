import { Character } from './Character'

export class Player extends Character {
	thirst: number
	hunger: number
	energy: number
	experience: number
	level: number

	constructor(
		name: string,
		health: number,
		maxHealth: number,
		thirst: number,
		hunger: number,
		energy: number,
		experience: number,
		level: number,
		gold: number,
	) {
		super(name, health, maxHealth, gold)
		this.thirst = thirst
		this.hunger = hunger
		this.energy = energy
		this.experience = experience
		this.level = level
		this.gold = gold
	}
}
