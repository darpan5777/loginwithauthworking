import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup,FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from '../login.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   
  public loginForm!:FormGroup;



  constructor( private formbuilder:FormBuilder , private AuthenticationService:AuthenticationService, private http : HttpClient, private router:Router, private loginservice:LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:[''],
      password:['']
    })
    if (this.AuthenticationService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  
  login(): void {
    if (this.loginForm.valid) {
      this.AuthenticationService.login(this.loginForm.value).subscribe(
        (result: any) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }

}

}