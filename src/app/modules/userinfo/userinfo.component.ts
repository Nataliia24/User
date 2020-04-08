import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';
import { User, Address} from '../models/users';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  
  users: User[] = [];
  userAddresses: Address[]= [];
  showAddr = false;

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  openAddresses(user) { 
    this.showAddr = true;
    this.userAddresses = this.users.find(elem => elem.userName === user.userName).userAddresses;
  }

  deleteUser(user: User) {
      this.userService.deleteUser(user.id).subscribe(() => {
        this.users = this.users.filter(u => u !== user);
    });
    }

  updateUser(user: User) {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['update-user']);
    }
    
  closeAddresses() {
    this.showAddr = false;
  }

}
