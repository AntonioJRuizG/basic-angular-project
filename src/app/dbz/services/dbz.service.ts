import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 500,
    },
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Vegeta',
      power: 8000,
    },
  ];

  onAddNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  deleteCurrentCharacter(id: number): void {
    this.characters.splice(id, 1);
  }
}
