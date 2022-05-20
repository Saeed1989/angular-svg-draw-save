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
  errorMessage = '';

  constructor(private reactangleService: RectangleService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.reactangleService.getRecOptions().subscribe(
      (res) => {
        this.recShapeOptions = res;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  resShapeOptionsChange(ev: RecShapeOptions) {
    this.recShapeOptions = ev;
    this.shapeChanged = true;
  }

  saveShape(): void {
    this.errorMessage = '';
    this.reactangleService.updateRecOptions(this.recShapeOptions).subscribe(
      (res) => {
        this.shapeChanged = false;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
