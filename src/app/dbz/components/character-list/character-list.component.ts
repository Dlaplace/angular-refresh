import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'app-character-list',
	templateUrl: './character-list.component.html',
	styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  @Input()
	public characterList: Character[] = [
		{
			name: 'trunks',
			power: 10,
      id: ''
		}
	];

  @Output()
  // onDelete: EventEmitter<number> = new EventEmitter();
  onDelete: EventEmitter<string> = new EventEmitter();

  emitUUID(uuid?: string): void {
    // TODO: delete character by ID
    if ( !uuid ) return
    this.onDelete.emit(uuid);
  }
  // emitIndex(index: number): void {
  //   // TODO: delete character by ID
  //   this.onDelete.emit(index);
  // }

  // onDeleteCharacter(index: number): void {
  //   // TODO: delete character by ID
  //   // this.characterList.splice(index, 1);
  //   console.log("onForm delete index: ", {index});
  // }

}
