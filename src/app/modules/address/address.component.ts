import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/modules/address/address.service';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';



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

  countryArray: any = [];
  stateArray: any = [];
  
  addresses: Address[] = [
    {value: 'home-0', viewValue: 'Home Address'},
    {value: 'billiding-1', viewValue: 'Billiding Address'},
    {value: 'shipment-2', viewValue: 'Shipment Address'}
  ];


  constructor(private apiHandler: AddressService) { }

  ngOnInit() {
		this.countryArray = [];
		this.apiHandler.getApiRequest(this.countryArray).subscribe((data) => {
			data.forEach((item) => {
				this.countryArray.push(item.country_name);
			});
		});
  }

  getStateByCountry(country: string) {
		this.stateArray = [];
		this.apiHandler.getApiRequest(this.stateArray + country).subscribe((data) => {
			data.forEach((item) => {
				this.stateArray.push(item.state_name);
			});
		});
	}
  

}

