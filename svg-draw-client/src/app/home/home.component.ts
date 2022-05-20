import { Component, OnInit, AfterViewInit, SimpleChanges } from '@angular/core';
import { RecShapeOptions } from '../core/models/rec-shape-options.model';
import { RectangleService } from './services/rectangle.service';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'SVG Drawing Demo';

  recShapeOptions: RecShapeOptions;
  shapeChanged = false;

  constructor(private reactangleService: RectangleService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.reactangleService.getRecOptions().subscribe((res) => {
      console.log(res);
      this.recShapeOptions = res;
    });
  }

  resShapeOptionsChange(ev: RecShapeOptions) {
    this.recShapeOptions = ev;
    this.shapeChanged = true;
  }

  saveShape(): void {
    this.shapeChanged = false;
    this.reactangleService
      .updateRecOptions(this.recShapeOptions)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
