import { Injectable, ErrorHandler } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class LoadingControllerService {
  loadingStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  setLoading(loadingStatus: boolean) {
    this.loadingStatus.next(loadingStatus);
  }
}
