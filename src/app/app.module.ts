import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhatrealHomeComponent } from './whatreal-home/whatreal-home.component';
import { UsersoverviewComponent } from './usersoverview/usersoverview.component';
import { UsersComponent } from './usersoverview/users/users.component';
import { PlandetailsComponent } from './usersoverview/users/plandetails/plandetails.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UsersService } from './usersoverview/users.service';


const appRoutes: Routes = [
  {path : '', component: WhatrealHomeComponent},
  {path : 'usersoverview', component: UsersoverviewComponent}, 
  {path: 'usersoverview/:id', component:UsersComponent},
];
 
@NgModule({
  declarations: [
    AppComponent,
    WhatrealHomeComponent,
    UsersoverviewComponent,
    UsersComponent,
    PlandetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
