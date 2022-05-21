/**
 * Loading indicator handling service
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License
 */

import { Injectable, ErrorHandler } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class LoadingControllerService {
  /** loading indicator status observable */
  loadingStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}
  /**
   * Set loading status
   * @param loadingStatus loading status
   */
  setLoading(loadingStatus: boolean) {
    this.loadingStatus$.next(loadingStatus);
  }
}
