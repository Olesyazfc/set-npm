export class Character {
    constructor(name) {
        this.name = name;
    }
}

export class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if (this.members.has(character)) {
            throw new Error('Такой персонаж уже есть в команде ')
        } else {
            this.members.add(character)
        }
    }
    addAll(...characters) {
        for (const character of characters) {
            this.members.add(character)
        }
        return this.members
    }
    toArray() {
        const array = Array.from(this.members)
        return array
    }
}
