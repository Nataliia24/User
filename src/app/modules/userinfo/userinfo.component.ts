import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';
import { User, Address} from '../../models/users';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) { }

  users: User[] = [];
  userAddresses: Address[]= [];
  showAddr = false;
  currentAddressUserId: number;
  firstNameSearch: string;
  lastNameSearch: string;
  userNameSearch: string;
  userEmailSearch: string;
  userPhoneSearch: string;

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  openAddresses(user: User) { 
    this.currentAddressUserId = user.id;
    this.showAddr = true;
    this.userAddresses = this.users.find(elem => elem.userName === user.userName).userAddresses;
  }

  onFind() {
    for (let user of this.users) {
      return this.userAddresses = user.userAddresses;
    }
  }

  openDialog(user: User) {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:user
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      console.log(result);
      if(result.data){
        this.deleteUser(result.data);
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).pipe(take(1)).subscribe(() => {
      this.users = this.users.filter(u => u.id !== id);
  });
  }

  updateUser(id: number) {
    this.router.navigate([`/updateuser/${id}`])
  }

  updateAddress(addressId: number) {
    this.router.navigate(['/update-address'], { queryParams: { userId: this.currentAddressUserId, addressId } });
  }

  closeAddresses() {
    this.showAddr = false;
  }

}
