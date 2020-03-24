import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
