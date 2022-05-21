import { Injectable, ErrorHandler } from '@angular/core';
import { FetchError } from '../models/fetchError.model';
import { ConvertUtil } from '../utils/convert.util';

@Injectable({
  providedIn: 'root',
})
export class AppFetchErrorHandlerService {
  constructor() {}

  /**
   * Converts API error to error object
   * @param err API error
   * @returns converted fetch error object
   */
  handleError(err: any): FetchError {
    let customError: FetchError = {
      errorNumber: err.error instanceof ErrorEvent ? err.status : -1,
      message: (<Error>err).message,
      friendlyMessage: ConvertUtil.errorToErrorMsg(err),
    };
    return customError;
  }
}
