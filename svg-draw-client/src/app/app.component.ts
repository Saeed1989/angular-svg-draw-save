import { Component } from '@angular/core';
import { LoadingControllerService } from './core/services/loading-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'svg-draw-client';
  isLoading = false;

  constructor(loadingControllerService: LoadingControllerService) {
    loadingControllerService.loadingStatus.subscribe((loadingStatus) => {
      setTimeout(() => {
        this.isLoading = loadingStatus;
      });
    });
  }
}
