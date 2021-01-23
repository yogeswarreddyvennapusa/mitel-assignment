import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {UsersService} from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 private Dummyuser: {
  id: string,
  name: string,
  email: string,
  age: number,
} ;

  constructor(private usersService : UsersService, private route: ActivatedRoute) {  }

  ngOnInit() {
     this.Dummyuser = {
       id: this.route.snapshot.params['id'],
     }
    
  }





}
