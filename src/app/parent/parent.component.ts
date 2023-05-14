import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  public count = 0;

  ngOnInit(): void {}

  onCountChange(event: number) {
    this.count = event;
  }
}
