import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  API_TOKEN = 'ECc4diIa-SXtV6ykFjIKTbiz4xugKbcRfEXWz-RUgHcqSud3FW-21jGx0zXxxpjsPWM';
  constructor(private http: HttpClient) { }

  getApiRequest(url: string): Observable<any[]> {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    return this.http.get("https://www.universal-tutorial.com/api/countries", requestOptions).pipe(
      map((applicants: any[]) => {
        return applicants;
      })
    );
}
}
