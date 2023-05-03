import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      counter: {{counter}}
    </h3>
    <button class="btn btn-primary" (click)="increaseByOne(1)">+1</button>
    <button class="btn btn-primary" (click)="increaseByOne(-1)">-1</button>
    <button class="btn btn-primary" (click)="resetNumber()">Reset</button>
  `
})
export class CounterComponent {
  public title: string = 'counter';
  public counter: number = 10;
  increaseByOne(value: number): void {
    this.counter+=value;
  }
  resetNumber(): void {
    this.counter = 10;
  }
}

