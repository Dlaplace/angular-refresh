import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DBZmainPageComponent  {
  constructor(
    private DbzService: DbzService
  ) { }

 get characters(): Character[] {
   return [...this.DbzService.charactersList];
 }

 onDeleteCharacter(id: string): void {
   this.DbzService.deleteCharacterByID(id);
 }

 onNewCharacter(character: Character): void {
   this.DbzService.addCharacter(character);
 }

}
