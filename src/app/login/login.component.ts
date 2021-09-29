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
      
      if(this.AuthenticationService.getToken()==='admin'){
        debugger
        this.router.navigate(['admin']);
      }
      else if(this.AuthenticationService.getToken()==='mentor'){
        debugger
        this.router.navigate(['admin/mentor']);
      }
      else if(this.AuthenticationService.getToken()==='intern'){
        debugger
        this.router.navigate(['admin/intern']);
      }
     
    }
  }
  
  public login(): void {
    if (this.loginForm.valid) {
      this.AuthenticationService.login().subscribe(
        (result: any) => {
          console.log(result);
          debugger
          const user = result.find((a:any)=>{
            return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
          });
          if(user){
            debugger
            this.AuthenticationService.setToken(user.role);
            if(user.role==='admin'){
              this.router.navigate(['admin'])
            }else if(user.role==='mentor'){
              this.router.navigate(['admin/mentor'])
            }
            else if(user.role==='intern'){
              this.router.navigate(['admin/intern'])
            }
          
            // alert("login success");
            // this.loginForm.reset();
            // this.router.navigate(['admin'])
          }  
          // switch(user.role){
          //   case 1:
          //     debugger
          //     user.role==='admin'
          //     this.router.navigate(['admin'])
          //     break;
          //   case 2:
          //     debugger
          //     user.role==='mentor'
          //     this.router.navigate(['mentor'])
          //     break;
          //   case 3:
          //     debugger
          //     user.role==='intern'
          //     this.router.navigate(['intren'])
          //     break;
          // }  
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }

}

}