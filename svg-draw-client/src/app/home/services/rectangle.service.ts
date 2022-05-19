import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, finalize } from 'rxjs/operators';
import { RecShapeOptions } from 'src/app/core/models/rec-shape-options.model';
import { AppFetchErrorHandlerService } from 'src/app/core/services/fetch-error-handler.service';
import { ShapeNetworkService } from 'src/app/core/services/network/shape-network.service';


@Injectable()
export class RectangleService {
  constructor(
    private appFetchErrorHandlerService: AppFetchErrorHandlerService,
    private networkService: ShapeNetworkService,
  ) {}

  getRecOptions(): Observable<RecShapeOptions> {
    console.log('get...');
    return this.addLaoding(
      this.networkService.getRectangle().pipe(
        tap((data) => console.log(JSON.stringify(data))),
        map((res) => {
          if (!res || !res.length) null;
          return res;
        }),
        catchError(this.handleError.bind(this))
      )
    );
  }

  updateRecOptions(options: RecShapeOptions): Observable<RecShapeOptions> {
    return this.addLaoding(
      this.networkService.updateRectangle(options).pipe(
        // Return the options on an update
        map(() => options),
        catchError(this.handleError.bind(this))
      )
    );
  }

  private handleError(err: any) {
    let errorMessage = this.appFetchErrorHandlerService.handleError(err);
    return throwError(errorMessage.friendlyMessage);
  }

  private addLaoding(inpObser$: Observable<any>): Observable<any> {
    return inpObser$.pipe(
      finalize(() => console.log('finalised'))
    );;
  }
}
