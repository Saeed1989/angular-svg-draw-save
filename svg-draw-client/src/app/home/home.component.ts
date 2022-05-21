/**
 * Home page component
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License
 */

import { Component, OnInit, AfterViewInit, SimpleChanges } from '@angular/core';
import { RecShapeOptions } from '../core/models/rec-shape-options.model';
import { RectangleService } from './services/rectangle.service';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  /** Title of the page */
  title = 'SVG Drawing Demo';

  /** Rectangle shape parameters */
  recShapeOptions: RecShapeOptions;
  /** Flag for shape change */
  shapeChanged = false;
  /** API error message */
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

  /**
   * Shape parameter change event
   * @param rShapeopt shape parameters
   */
  resShapeOptionsChange(rShapeopt: RecShapeOptions) {
    this.recShapeOptions = rShapeopt;
    this.shapeChanged = true;
  }

  /**
   * Save shape parameters
   */
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
