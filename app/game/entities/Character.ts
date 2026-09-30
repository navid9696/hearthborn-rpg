export class Character {
	name: string
	health: number
	maxHealth: number
	gold: number

	constructor(name: string, health: number, maxHealth: number, gold: number) {
		this.name = name
		this.health = health
		this.maxHealth = maxHealth
		this.gold = gold
	}

	takeDamage(damage: number) {
		this.health -= damage
	}

	heal(amount: number) {
		this.health += amount
	}
}
