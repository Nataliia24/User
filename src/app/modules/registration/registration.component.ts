import { Component} from '@angular/core';
import { Users } from '../user/users';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  users: Users[] = [];
  

  constructor(private userS: UserService) {}

  addUserMainInfo(event: Users) {
  
}

addAddressInfo(event: Users) {

}

}
