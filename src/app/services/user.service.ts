import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  users(): Observable<User[]> {
    return this.httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  userById(id): Observable<User> {
    return  this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  filterByNameUsers(users, name): User[] {
    return users.filter(value =>  value.name.toLowerCase().includes(name.toLowerCase()));
  }

  filterUsersByIdAndName(users, user): User[] {
    return users.filter(value => value.id === user.id || value.username.toLowerCase().includes(user.username.toLowerCase()));
  }
}
