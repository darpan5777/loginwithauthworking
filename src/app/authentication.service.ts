import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterLinkWithHref } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthenticationService {
  constructor(private router: Router,private http: HttpClient) {}

  url!: "http://localhost:3000/signup";
  
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  // login({ email, password }: any): Observable<any> {
  //   if (email === 'admin@gmail.com' && password === 'admin123') {
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({ name: 'Darpan parmar', email: 'admin@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }
  login(): Observable<any> {
   
    return  this.http.get<User>("http://localhost:3000/signup")

  }
}