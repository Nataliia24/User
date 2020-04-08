import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { compareValidator } from 'src/app/compare/compare-validator.directive';
import {first, take} from "rxjs/operators";


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User;
  updateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {

    let userId = window.localStorage.getItem("editUserId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['userinfo']);
      return;
    }

    this.updateForm = this.fb.group({
      'firstName': this.fb.control(null, Validators.required),
      'lastName': this.fb.control(null, Validators.required),
      'userName': this.fb.control(null, Validators.required),
      'phone': this.fb.control(null, [Validators.required, Validators.pattern("[0-9 ]{12}")]),
      'email': this.fb.control(null, [Validators.required, Validators.email]),
      'password': this.fb.control(null, [Validators.required, Validators.minLength(6)]),
      'confirmpassword': this.fb.control(null, [Validators.required, compareValidator('password')])
    });

    this.userService.getUsersById(+userId).subscribe(
      data => {
        this.updateForm.setValue(data);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  onSubmit() {
    this.userService.updateUser(this.updateForm.value)
    .pipe(take(1))
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['userinfo']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

 

}
