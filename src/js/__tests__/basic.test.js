import {Character, Team} from '../basic.js'

const firstTeam = new Team 
const Undead = new Character('Undead')
const Zombie = new Character('Zombie')

test('добаление нового персонажа', () => {    
    firstTeam.add(Undead) 
    expect(firstTeam.toArray()).toEqual([Undead]);
});

test('добаление существующего персонажа', () => {
    expect(() => {
        firstTeam.add(Undead)
        firstTeam.add(Undead)
    }).toThrow('Такой персонаж уже есть в команде ');
});

test('добаление нескольких персонажей', () => {    
    firstTeam.addAll(Undead, Zombie) 
    expect(firstTeam.toArray()).toEqual([Undead, Zombie]);
});