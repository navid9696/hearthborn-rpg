export class Character {
	name: string
	health: number
	maxHealth: number

	constructor(name: string, health: number, maxHealth: number) {
		this.name = name
		this.health = health
		this.maxHealth = maxHealth
	}

	takeDamage(damage: number) {
		this.health -= damage
	}

	heal(amount: number) {
		this.health += amount
	}
}
