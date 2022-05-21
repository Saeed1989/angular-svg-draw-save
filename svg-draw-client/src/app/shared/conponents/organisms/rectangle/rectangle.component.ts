/**
 * Rectangle draw component
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecShapeOptions } from 'src/app/core/models/rec-shape-options.model';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
})
export class RectangleComponent implements OnInit {
  /** Rectangle shape parameters */
  @Input() shapeOptions: RecShapeOptions;
  /** Shape parameter change event emitter */
  @Output() shapeOptionsChange = new EventEmitter<RecShapeOptions>();

  /** Flag for drag event */
  isDragging: boolean = false;
  /** Flag for resize event */
  isResizing: boolean = false;

  /** Resize start point x */
  resizeStartX = 0;
  /** Resize start point y */
  resizeStartY = 0;

  /** Drag start point x */
  draggingStartX = 0;
  /** Drag start point y */
  draggingStartY = 0;

  /** Perimeter of the rectangle */
  permimeter = 0;

  constructor() {}

  ngOnInit() {
    this.updatePerimeter();
  }

  /**
   * Mouse down event
   * @param event event object for mouse down
   */
  onMouseDown(event: any): void {
    if (event.target.classList.contains('draggable')) {
      this.startDragging(event);
    } else if (event.target.classList.contains('resizable')) {
      this.startResizing(event);
    }
  }

  /**
   * Mouse move event
   * @param event event ofject for mouse move
   */
  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      this.dragToMousePosition(event);
    } else if (this.isResizing) {
      this.resizeToMousePosition(event);
    }
  }

  /**
   * Mouse up event
   * @param event event object for mouse up
   */
  onMouseUp(event: MouseEvent): void {
    if (this.isDragging) {
      this.dragToMousePosition(event);
    } else if (this.isResizing) {
      this.resizeToMousePosition(event);
    }
    if (this.isDragging || this.isResizing) {
      this.shapeOptionsChange.emit(this.shapeOptions);
    }
    this.isDragging = false;
    this.isResizing = false;
  }

  /**
   * Start dragging shape
   * @param event event object for mouse down
   */
  startDragging(event: MouseEvent): void {
    this.isDragging = true;
    this.draggingStartX = event.clientX;
    this.draggingStartY = event.clientY;
  }

  /**
   * Start resizing shape
   * @param event event object for mouse down
   */
  startResizing(event: MouseEvent): void {
    this.isResizing = true;
    this.resizeStartX = event.clientX;
    this.resizeStartY = event.clientY;
  }

  /**
   * Drag shape
   * @param event event object for mouse move
   */
  dragToMousePosition(event: MouseEvent) {
    const dragX = event.clientX - this.draggingStartX;
    const dragY = event.clientY - this.draggingStartY;
    this.draggingStartX = event.clientX;
    this.draggingStartY = event.clientY;
    this.shapeOptions.originX += dragX;
    this.shapeOptions.originY += dragY;
  }

  /**
   * Resize shape
   * @param event event object for mouse move
   */
  resizeToMousePosition(event: MouseEvent) {
    const dragX = event.clientX - this.resizeStartX;
    const dragY = event.clientY - this.resizeStartY;
    this.resizeStartX = event.clientX;
    this.resizeStartY = event.clientY;
    this.shapeOptions.width += dragX;
    this.shapeOptions.height += dragY;
    // limit to minimum size
    if (this.shapeOptions.width < 10) {
      this.shapeOptions.width = 10;
    }
    if (this.shapeOptions.height < 10) {
      this.shapeOptions.height = 10;
    }
    // update perimeter of the rectangle after size change
    this.updatePerimeter();
  }

  /**
   * Update perimeter
   */
  updatePerimeter() {
    this.permimeter =
      this.shapeOptions.width * 2 + this.shapeOptions.height * 2;
  }
}
