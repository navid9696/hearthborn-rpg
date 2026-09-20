import { Character } from './Character'

export class Enemy extends Character {
	receiveDmg: number

	constructor(receiveDmg: number, name: string, health: number, maxHealth: number) {
		super(name, health, maxHealth)
		this.receiveDmg = receiveDmg
	}
    receiveDmg2(dmg:number){
        this.health -= dmg
    }
}
