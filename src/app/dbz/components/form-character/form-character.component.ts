import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form-character',
  templateUrl: './form-character.component.html',
  styleUrl: './form-character.component.css',
  standalone: false,
})

export class FormCharacterComponent {

  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();

  public character = {
    id: '',
    name: '',
    power: 0,
  };

  public onSubmit() : void {

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {
      id: '',
      name: '',
      power: 0,
    }
  }

  public onDelete() : void {
    console.log('Delete');
  }
}
