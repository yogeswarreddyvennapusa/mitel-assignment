import { Injectable } from '@angular/core';
import {users} from './users.model';
import {HttpClient}  from '@angular/common/http'
import {map} from 'rxjs/operators';
import { Subject } from "rxjs";

@Injectable()
export class UsersService {
 
 private users: users[]= [];
 private usersUpdated = new Subject<users[]>();

 constructor (private http: HttpClient) {}

 getUsers() {
  return this.http.get<{message: string; users: any}>('http://localhost:3000/api/users')
  .pipe(map((userData) => {
    return userData.users.map(mappeduser => {
     return {
      id: mappeduser._id,
      Users: mappeduser.Users,
     }
    })
  }))
  .subscribe(transformedUsers => {
   this.users = transformedUsers;
   this.usersUpdated.next([...this.users]);
  })
 }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

}