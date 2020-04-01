import { Component} from '@angular/core';
import { User } from '../user/users';
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
  addressInfo: User;
  pageContent: PageContent = PageContent.USER_FORM;
 

  constructor(private userS: UserService) {}

  addUserMainInfo(event: User) {
    this.userMainInfo = event;
    this.pageContent = PageContent.ADDRESS_FORM;
  
}

addAddressInfo(event: User) {
  this.addressInfo = event;
  this.pageContent = undefined;
  const User = {...this.userMainInfo, ...this.addressInfo}
  this.userS.createUser(User).subscribe(
    (users: User[]) => this.users = users
  );
}

setPageContent(content: PageContent) {
  this.pageContent = content;
  console.log(content);
}

}
