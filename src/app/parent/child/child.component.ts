import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Output() newItemEvent = new EventEmitter<number>();
  public count = 0;

  ngOnInit(): void {}

  increment() {
    const value = this.count + 1;
    this.newItemEvent.emit(value);
  }

  decrement() {
    const value = this.count - 1;
    this.newItemEvent.emit(value);
  }
}
