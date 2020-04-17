import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Country } from 'src/app/models/country.model';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { Address } from 'src/app/models/users';

interface ViewAddress {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  addressForm: FormGroup;
  address: Address;
  countries$: Country[];
  userId: number;
  addressId: number;

  addresses: ViewAddress[] = [
    {value: 'home-0', viewValue: 'Home Address'},
    {value: 'billiding-1', viewValue: 'Billiding Address'},
    {value: 'shipment-2', viewValue: 'Shipment Address'}
  ];
  

  constructor(private dataService: DataService, 
    private fb: FormBuilder, 
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getCountries()
    .subscribe(data => this.countries$ = data);

    this.addressForm = this.fb.group({
      type: this.fb.control('', Validators.required),
      address: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
      country: this.fb.control('', Validators.required),
      code: this.fb.control('', [Validators.required, Validators.pattern("[0-9 ]{5}")]),
    });

    const {userId, addressId} = this.route.snapshot.queryParams;

    this.userId = userId;
    this.addressId = addressId;
    console.log(this.route.snapshot.queryParams);
    this.userService.getUsersById(this.userId).pipe(take(1)).subscribe(
      user => {
        console.log(user)
        this.address = user.userAddresses.find(address => address.id === +addressId);
        console.log(this.address)
        this.addressForm.patchValue(this.address) 
      });
  }

  updateAddress() {
    this.userService.updateUser(this.addressForm.value, this.addressId).pipe(take(1)).subscribe(
      () => {
        this.router.navigate(['/user-info']);
      }
    )
  }
  }


