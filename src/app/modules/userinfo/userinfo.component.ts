import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, Address} from '../models/users';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(private userService: UserService) { }

  columns = ["User id", "First Name", "Last name", "User name", "Phone", "Email", "Address"];
  index = ["id", "firstName", "lastName", "userName", "phone", "email", "address"];
  users: User[] = [];
  addresses: any[]= [];
  showAddr = false;

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  openAddresses(user) { 
    this.showAddr = true;
    this.addresses = this.users.find(elem => elem.userName === user.userName).address;
  }

  deleteUser(user) {
    for(let i = 0; i < this.users.length; ++i){
      if (this.users[i] === user) {
          this.users.splice(i,1);
      }
    }
  }

  closeAddresses() {
    this.showAddr = false;
  }

}
