import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../modules/user/users';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  

  url: string = "http://localhost:3000/Users/";

  getUsers()
  {
    return this.http.get<Users[]>(this.url);
  }

 createUser(user: Users): Observable<Users> {
   return this.http.post<Users>(this.url, JSON.stringify(user), httpOptions);
 }
}
