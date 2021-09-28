import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { InternComponent } from './intern/intern.component';
import { MentorsComponent } from './mentors/mentors.component';

const routes: Routes =   [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'intern', component: InternComponent },
      { path: 'mentors', component: MentorsComponent},
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
