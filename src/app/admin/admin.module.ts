import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { InternComponent } from './intern/intern.component';
import { MentorsComponent } from './mentors/mentors.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AdminComponent,
    ServiceComponent,
    HomeComponent,
    InternComponent,
    MentorsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
