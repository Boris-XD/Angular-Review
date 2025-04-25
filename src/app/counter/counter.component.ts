import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `<h3>{{counter}}</h3>
             <button (click)="increment(1)">+1</button>
             <button (click)="reset()">Reset</button>
             <button (click)="increment(-1)">+1</button>`
})

export class CounterComponent{
  public title: string = 'bases';
  public counter: number = 10;

  public increment(value: number): void {
    this.counter = this.counter + value;
  }

  public reset(): void {
    this.counter = 10;
  }
}
