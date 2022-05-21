/**
 * App root component
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License
 */
import { AfterViewInit, Component } from '@angular/core';
import { LoadingControllerService } from './core/services/loading-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'svg-draw-client';
  isLoading = false;

  constructor(private loadingControllerService: LoadingControllerService) {}

  ngAfterViewInit(): void {
    this.loadingControllerService.loadingStatus$.subscribe((loadingStatus) => {
      setTimeout(() => {
        this.isLoading = loadingStatus;
      });
    });
  }
}
