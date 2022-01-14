import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Result } from './result.model';

@Pipe({
  name: 'http'
})
export class HttpPipe implements PipeTransform {

  constructor(private http: HttpClient) {}

  transform(url: string, options = {}): Observable<Result> {
    return this.http.get<Result>(url, options).pipe(
      map(data => ({url, data})),
      catchError(() => of({url, data: ''})),
    );
  }

}