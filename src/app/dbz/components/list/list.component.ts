import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 400,
    },
  ];

  @Output()
  onDeleteId: EventEmitter<number> = new EventEmitter();

  deleteCharacter(id: number): void {
    this.onDeleteId.emit(id);
  }
}
