import { Component, ViewChild} from '@angular/core';
import { User, Address } from '../../models/users';
import { UserService } from 'src/app/services/user.service';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  users: User[] = [];
  userMainInfo: User;
  addressInfo: Address;
  userForm: FormGroup;
 @ViewChild(MatStepper) stepper: MatStepper;

  constructor(private userS: UserService) {}

  ngOnInit() {
 
  }
 addUserMainInfo(event: User) {
    this.userMainInfo = event;
    this.stepper.next();
  
}

addAddressInfo(event: Address) {
  this.addressInfo = event;
  this.stepper.next();
}

get userValue() {
  return {...this.userMainInfo, ...this.addressInfo}
}

onSave() {
  const User = {...this.userMainInfo, ...this.addressInfo}
  this.userS.createUser(User).pipe(take(1)).subscribe(
    (response) => {
      this.users = [...this.users, response]
    }
  );
}

goBack() {
  this.stepper.previous();
}

}
