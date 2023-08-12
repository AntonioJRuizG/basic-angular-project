import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);
    (this.character.name = ''), (this.character.power = 0);
  }
}
