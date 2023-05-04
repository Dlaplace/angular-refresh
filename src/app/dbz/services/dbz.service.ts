import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public charactersList: Character[] = [{
    name: 'Goku',
    power: 15000,
    id: uuid()
  },{
    name: 'Vegeta',
    power: 7500,
    id: uuid()
  },{
    name: 'Trunks',
    power: 10000,
    id: uuid()
  }];



  // onDeleteCharacter(index: number): void {
  //   console.log("on parend index to be deleted", {index});
  //   this.charactersList.splice(index, 1);
  // }

  deleteCharacterByID(id: string): void {
    this.charactersList = this.charactersList.filter(character => character.id !== id);
  }

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid()
    }
    this.charactersList.push(newCharacter);
  }
}
