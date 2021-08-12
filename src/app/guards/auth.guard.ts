import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authService : AuthService) {}
  canActivate(): Observable<boolean> {
    return this.authService.validateToken().pipe(
      tap((isAuth) => {
        if( !isAuth ){
          this.router.navigate(['/public']);
        }
      }))
  }
  canLoad():Observable<boolean> {
   return this.authService.validateToken().pipe(
      tap((isAuth) => {
        if( !isAuth ){
          this.router.navigate(['/public']);
        }
      }))
  }
}
