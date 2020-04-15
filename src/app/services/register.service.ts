import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  urlRegister: string = "http://localhost:3000/Register";

  register(register: Register):Observable<Register[]> {
    return this.http.post<Register[]>(this.urlRegister, JSON.stringify(register))
  }
}
