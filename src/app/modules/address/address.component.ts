import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { User } from '../models/users';
import { PageContent } from '../registration/registration.component';
import { Country } from '../models/country.model';


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
 
  @Output() sendAddessInfo: EventEmitter<User> = new EventEmitter();
  @Output() backToPreviousPage: EventEmitter<PageContent> = new EventEmitter();

  addresses: Address[] = [
    {value: 'home-0', viewValue: 'Home Address'},
    {value: 'billiding-1', viewValue: 'Billiding Address'},
    {value: 'shipment-2', viewValue: 'Shipment Address'}
  ];


  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dataService.getCountries()
    .subscribe(data => this.countries$ = data);

    this.addressForm = this.fb.group({
      "userAddresses": this.fb.array([this.getaddresses()])
    });
  }

onSubmit(): void {
    this.sendAddessInfo.emit(this.addressForm.value);
    alert("User created sucessfully!")
}

onPriviousClick() {
this.backToPreviousPage.emit(PageContent.USER_FORM);
}

get addressArray() {
  return <FormArray>this.addressForm.get('userAddresses');
}

addAddress() {
  this.addressArray.push(this.getaddresses());
}

deletAddress(i){
  this.addressArray.removeAt(i);
}

getaddresses() {
  return this.fb.group({
    'type': this.fb.control(null, [Validators.required]),
      'address': this.fb.control(null, [Validators.required]),
      'city': this.fb.control(null, [Validators.required]),
      'country': this.fb.control(null, [Validators.required]),
      'code': this.fb.control(null, [Validators.required, Validators.pattern("[0-9 ]{5}")])
  })
}

}
