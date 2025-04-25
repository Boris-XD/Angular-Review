import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
})

export class ListComponent {

  @Input()
  public Characters: Character[] = [];

  @Output()
  OnDeleteCharacterEmmit: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id: string): void {
    this.OnDeleteCharacterEmmit.emit(id);
    // debugger;
    //this.Characters.splice(index, 1);
  }
 }
