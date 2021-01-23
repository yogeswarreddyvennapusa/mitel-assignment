import { Injectable } from '@angular/core';
import {users, dummyUser} from './users.model';
import {HttpClient}  from '@angular/common/http'
import {map} from 'rxjs/operators';
import { Subject } from "rxjs";

@Injectable()
export class UsersService {

 private users: users[]= [];
 private userById:dummyUser;
 private fetchedUsers: {};
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

  //  getuser(id: string) {
  //   this.users.map((userData) => {
  //    this.fetchedUsers= userData.Users;
  //   })
  //   const importedusers = Object.entries(this.fetchedUsers);
  //   const server = importedusers[1].find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   return server;
  // }

  

}