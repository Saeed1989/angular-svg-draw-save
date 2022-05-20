import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingOverlayComponent } from './conponents/organisms/loading-overlay/loading-overlay.component';
import { RectangleComponent } from './conponents/organisms/rectangle/rectangle.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoadingOverlayComponent, RectangleComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingOverlayComponent,
    RectangleComponent,
  ],
})
export class SharedModule {}
