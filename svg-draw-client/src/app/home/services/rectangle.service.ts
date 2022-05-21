/**
 * Service for rectangle read and write
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License
 */

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, finalize } from 'rxjs/operators';
import { RecShapeOptions } from 'src/app/core/models/rec-shape-options.model';
import { AppFetchErrorHandlerService } from 'src/app/core/services/fetch-error-handler.service';
import { LoadingControllerService } from 'src/app/core/services/loading-controller.service';
import { ShapeNetworkService } from 'src/app/core/services/network/shape-network.service';

@Injectable()
export class RectangleService {
  constructor(
    private appFetchErrorHandlerService: AppFetchErrorHandlerService,
    private networkService: ShapeNetworkService,
    private loadingControllerService: LoadingControllerService
  ) {}

  /**
   * Get rectangle parameters from cloud
   * @returns rectangle oprions observable
   */
  getRecOptions(): Observable<RecShapeOptions> {
    return this.addLaoding(
      this.networkService.getRectangle().pipe(
        map((res) => {
          if (!res || !res.length) null;
          return res;
        }),
        catchError(this.handleError.bind(this))
      )
    );
  }

  /**
   * Save rectangle shape parameters to cloude
   * @param options rectangle shape parameters
   * @returns save result observable
   */
  updateRecOptions(options: RecShapeOptions): Observable<RecShapeOptions> {
    return this.addLaoding(
      this.networkService.updateRectangle(options).pipe(
        // Return the options on an update
        map(() => options),
        catchError(this.handleError.bind(this))
      )
    );
  }

  /**
   * Handle API error
   * @param err API error
   * @returns error observable
   */
  private handleError(err: any) {
    let errorMessage = this.appFetchErrorHandlerService.handleError(err);
    return throwError(errorMessage.friendlyMessage);
  }

  /**
   * Loading indicator wrapper observable
   * @param inpObser$ inner observable
   * @returns modified inner observable
   */
  private addLaoding(inpObser$: Observable<any>): Observable<any> {
    this.loadingControllerService.setLoading(true);
    return inpObser$.pipe(
      finalize(() => this.loadingControllerService.setLoading(false))
    );
  }
}
