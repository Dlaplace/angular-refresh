import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DBZmainPageComponent } from './pages/main-pages.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { AddDbzCharacterComponent } from './components/add-dbz-character/add-dbz-character.component';


@NgModule({
  declarations: [
    DBZmainPageComponent,
    CharacterListComponent,
    AddDbzCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DBZmainPageComponent
  ]
})
export class DbzModule { }
