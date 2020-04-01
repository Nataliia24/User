import { Component, OnInit, Output } from '@angular/core';
import { Country } from './country.model';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Users } from '../user/users';

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
  @Output() sendAddessInfo: EventEmitter<Users> = new EventEmitter();

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

  onSubmit(): void {
    this.sendAddessInfo.emit(this.addressForm.value);
}

}
