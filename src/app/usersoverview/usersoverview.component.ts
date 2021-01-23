import { Component, OnInit, Output } from '@angular/core';

import {users} from './users.model';
import { Subscription } from 'rxjs';
import { UsersService } from './users.service';

@Component({
  selector: 'app-usersoverview',
  templateUrl: './usersoverview.component.html',
  styleUrls: ['./usersoverview.component.css']
})
export class UsersoverviewComponent {
  
  users :any;
  fetchedUsers : users[] =[];
  private usersSub: Subscription;
  constructor(private usersService : UsersService) { }
  

  ngOnInit() {
    this.usersService.getUsers();
     this.usersService.getUserUpdateListener()
      .subscribe((userData: users[]) => {
        this.fetchedUsers = userData;
         this.fetchedUsers.map(userData => {
           this.users = userData.Users;
           console.log(userData.Users);
         })
      });
  }
  
  
    

}
