import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecShapeOptions } from 'src/app/core/models/rec-shape-options.model';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
})
export class RectangleComponent implements OnInit {

 @Input() shapeOptions: RecShapeOptions;
 @Output() shapeOptionsChange = new EventEmitter<RecShapeOptions>();

  constructor() {}

  ngOnInit() {}
}
