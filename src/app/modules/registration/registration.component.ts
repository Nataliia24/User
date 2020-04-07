import { Component} from '@angular/core';
import { User, Address } from '../models/users';
import { UserService } from 'src/app/services/user.service';
import { FormGroup } from '@angular/forms';

export enum PageContent {
USER_FORM="USER_FORM",
ADDRESS_FORM="ADDRESS_FORM",
};
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  users: User[] = [];
  userMainInfo: User;
  addressInfo: Address[];
  pageContent: PageContent = PageContent.USER_FORM;
  userForm: FormGroup;
 

  constructor(private userS: UserService) {}

  addUserMainInfo(event: User) {
    this.userMainInfo = event;
    this.pageContent = PageContent.ADDRESS_FORM;
  
}

addAddressInfo(event: Address[]) {
  const User = {...this.userMainInfo, ...event}
  this.userS.createUser(User).subscribe();
  this.pageContent = null;
}

setPageContent(content: PageContent) {
  this.pageContent = content;
}

}
