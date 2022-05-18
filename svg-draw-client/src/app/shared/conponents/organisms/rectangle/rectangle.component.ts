import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
})
export class RectangleComponent implements OnInit {
  public shape = {
    name: 'sampleName',
    originX: 100,
    originY: 100,
    width: 100,
    height: 100,
    strokeColor: 'black',
    fillColor: 'rgb(231, 231, 231',
    strokeWidth: 1,
  };
  constructor() {}

  ngOnInit() {}
}
