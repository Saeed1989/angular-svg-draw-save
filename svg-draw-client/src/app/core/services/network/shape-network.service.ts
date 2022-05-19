import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { RecShapeOptions } from '../../models/rec-shape-options.model';

@Injectable({
  providedIn: 'root',
})
export class ShapeNetworkService {
  readPort = '7113';
  writePort = '7113';
  constructor(private http: HttpClient) {}

  getRectangle(): Observable<any> {
    console.log('Getting rectangle from the server.');
    return this.http.get<any>(`${this.readPort}/api/rectangle`);
  }

  updateRectangle(rectangle: RecShapeOptions): Observable<string> {
    const paylodad = {...rectangle};
    return this.http.post(
      `${this.writePort}/api/rectangle`,
      paylodad,
      { responseType: 'text' }
    );
  }

}
