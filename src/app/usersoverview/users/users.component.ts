import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {UsersService} from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 private user: {
  id: string,
  name: string,
  email: string,
  age: number,
  plan: {
   type: string,
   status: string,
   description: string,
   features: {
    conferenceCalling: boolean,
    callWaiting: boolean,
    voiceMail: boolean,
   }
  }
} ;

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    // }
    
  }





}
