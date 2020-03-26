import { Component, OnInit } from '@angular/core';
import { Country } from './country.model';
import { DataService } from './data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Address {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressForm: FormGroup;

  countries$: Country[];

  addresses: Address[] = [
    {value: 'home-0', viewValue: 'Home Address'},
    {value: 'billiding-1', viewValue: 'Billiding Address'},
    {value: 'shipment-2', viewValue: 'Shipment Address'}
  ];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCountries()
    .subscribe(data => this.countries$ = data);

    this.addressForm = new FormGroup({
      'type': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required]),
      'country': new FormControl(null, [Validators.required]),
      'code': new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{12}")])
    });
  }

}
