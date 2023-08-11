import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Angular app';
  public counter: number = 10;

  increaseBy(n: number): void {
    this.counter += n;
  }
  resetCounter(): void {
    this.counter = 10;
  }
}
