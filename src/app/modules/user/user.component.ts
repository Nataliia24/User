import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from './users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private ur: UserService) { }

  columns = ["User id", "First Name", "Last name", "User name", "Phone", "Email", "Address", ];
  index = ["id", "firstName", "lastName", "userName", "phone", "email"];
  users: Users[] = [];

  ngOnInit(): void {
    this.ur.getUsers().subscribe
    (
      (response) =>
      {
        this.users = response;
      },
      (error) =>
      {
        console.log("Error Occurred :" + error);
      }
    )
  }

}
