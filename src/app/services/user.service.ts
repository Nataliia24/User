import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Address } from '../models/users';

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
  

  url: string = "http://localhost:3000/Users";

  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.url);
  }

  getUsersById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

 createUser(user: User): Observable<User> {
   return this.http.post<User>(this.url, user);
 }

 deleteUser(id: number): Observable<{}> {
  return this.http.delete(`${this.url}/${id}`, httpOptions);
 }

 updateUser(user: User, id: number): Observable<User> {
  return this.http.patch<User>(`${this.url}/${id}`, user);
 }

 updateAddress(userAddresses: Address, id: number): Observable<Address> {
   return this.http.patch<Address>(`${this.url}/${id}`, userAddresses)
 }
}
