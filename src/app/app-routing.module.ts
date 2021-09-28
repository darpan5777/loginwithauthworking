import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AuthgaurdGuard } from './authgaurd.guard';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent},


{ path: 'admin',
 canActivate: [AuthgaurdGuard],
 loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
