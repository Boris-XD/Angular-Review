import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public Characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 5000,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 7000,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 6000,
    },
    {
      id: uuid(),
      name: 'Bulma',
      power: 100,
    },
    {
      id: uuid(),
      name: 'Frieza',
      power: 12000,
    },
    {
      id: uuid(),
      name: 'Cell',
      power: 13000,
    },
    {
      id: uuid(),
      name: 'Majin Buu',
      power: 14000,
    },
  ]

  addCharacter(character: Character): void {
    // debugger;
    const newCharacter: Character = {
      ...character,
      id: uuid()
    };

    this.Characters.push(newCharacter);

    console.log(this.Characters);
  }

  deleteCharacterById(id: string): void {
    // debugger;
    this.Characters = this.Characters.filter(character => character.id !== id);
  }
}
