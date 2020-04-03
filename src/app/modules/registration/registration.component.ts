import { Component} from '@angular/core';
import { User, Address } from '../models/users';
import { UserService } from 'src/app/services/user.service';

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
 

  constructor(private userS: UserService) {}

  addUserMainInfo(event: User) {
    this.userMainInfo = event;
    
    this.pageContent = PageContent.ADDRESS_FORM;
  
}

addAddressInfo(event: Address) {
  const User = {...this.userMainInfo, address: [event]}
  this.userS.createUser(User).subscribe();

  this.pageContent = undefined;
}

setPageContent(content: PageContent) {
  this.pageContent = content;
  console.log(content);
}

}
