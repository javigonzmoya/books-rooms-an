import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenHeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'x-token': localStorage.getItem('token') || '',
    });
    const cloneReq = req.clone({
      headers,
    });

    return next.handle(cloneReq).pipe(catchError(this.handleError));
  }

  handleError(e: HttpErrorResponse) {
    console.log('error manejado');
    console.warn(e);
    return throwError('Error httpResponse');
  }
}