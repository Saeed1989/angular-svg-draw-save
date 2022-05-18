import {
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { RecShapeOptions } from '../core/models/rec-shape-options.model';


@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'SVG Drawing Demo';

  public recShapeOptions: RecShapeOptions = {
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

  ngOnInit(): void {}

  ngOnChanges() {}

  ngAfterViewInit(): void {}

  saveShape(): void {}
}
