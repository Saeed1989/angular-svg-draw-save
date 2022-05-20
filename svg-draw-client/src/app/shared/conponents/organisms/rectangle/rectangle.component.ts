import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecShapeOptions } from 'src/app/core/models/rec-shape-options.model';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
})
export class RectangleComponent implements OnInit {
  @Input() shapeOptions: RecShapeOptions;
  @Output() shapeOptionsChange = new EventEmitter<RecShapeOptions>();

  isDragging: boolean = false;
  isDrawing: boolean = false;
  isResizing: boolean = false;
  isSelectingPoints: boolean = false;

  resizeStartX = 0;
  resizeStartY = 0;

  draggingStartX = 0;
  draggingStartY = 0;

  permimeter = 0;

  constructor() {}

  ngOnInit() {
    this.updatePerimeter();
  }

  onMouseDown(event: any): void {
    //this.getMousePosition(event);
    if (event.target.classList.contains('draggable')) {
      this.startDragging(event);
    } else if (event.target.classList.contains('resizable')) {
      this.startResizing(event);
    }
  }

  onMouseMove(event: any): void {
    if (this.isDragging) {
      this.dragToMousePosition(event);
    } else if (this.isResizing) {
      this.resizeToMousePosition(event);
    }
  }

  onMouseUp(event: any): void {
    if (this.isDragging) {
      this.dragToMousePosition(event);
    } else if (this.isResizing) {
      this.resizeToMousePosition(event);
    }
    if (this.isDragging || this.isResizing) {
      this.shapeOptionsChange.emit(this.shapeOptions);
    }
    this.isDrawing = false;
    this.isDragging = false;
    this.isResizing = false;
  }

  startDragging(event: any): void {
    this.isDragging = true;
    this.draggingStartX = event.clientX;
    this.draggingStartY = event.clientY;
  }

  startResizing(event: any): void {
    this.isResizing = true;
    this.resizeStartX = event.clientX;
    this.resizeStartY = event.clientY;
  }

  dragToMousePosition(event: MouseEvent) {
    const dragX = event.clientX - this.draggingStartX;
    const dragY = event.clientY - this.draggingStartY;
    this.draggingStartX = event.clientX;
    this.draggingStartY = event.clientY;
    this.shapeOptions.originX += dragX;
    this.shapeOptions.originY += dragY;
  }

  resizeToMousePosition(event: MouseEvent) {
    const dragX = event.clientX - this.resizeStartX;
    const dragY = event.clientY - this.resizeStartY;
    this.resizeStartX = event.clientX;
    this.resizeStartY = event.clientY;
    this.shapeOptions.width += dragX;
    this.shapeOptions.height += dragY;
    if (this.shapeOptions.width < 10) {
      this.shapeOptions.width = 10;
    }
    if (this.shapeOptions.height < 10) {
      this.shapeOptions.height = 10;
    }
    this.updatePerimeter();
  }

  updatePerimeter() {
    this.permimeter =
      this.shapeOptions.width * 2 + this.shapeOptions.height * 2;
  }
}
