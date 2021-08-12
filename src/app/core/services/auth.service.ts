import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { LoginResponse } from '../models/loginResponse.model';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private _user : User;

  get user (){
    return {...this._user};
  }

  constructor(private http : HttpClient, private router: Router) { }

  login(email: string, password: string, remenber : string): Observable<LoginResponse> {
    return this.http.post(`${BASE_URL}/auth/`,{email, password}).pipe(
      map(( data : LoginResponse) => data),
      tap((data: LoginResponse) => {
        this._user = data.user;
        localStorage.setItem('token', data.token);
        localStorage.setItem('remember', remenber);
        this.router.navigate(['/private'])
      })
    )
  }

  validateToken(): Observable<boolean> {
    return this.http.get(`${BASE_URL}/auth/renew`,).pipe(
      map(( data : LoginResponse) => {
        this._user = data.user;
        localStorage.setItem('token', data.token);
        return true;
      }),
      catchError((error) => of(false))
    )
  }

}
