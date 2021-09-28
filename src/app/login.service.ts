import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
     
     user!:User[] 
     url!: "http://localhost:3000/signup";


  constructor(private http: HttpClient) { }

 public login(){
   return  this.http.get<User>("http://localhost:3000/signup",)


   
}
}