import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  
  id:number;
  user: User;
  
  firstName = this.fb.control('', Validators.required);
  lastName = this.fb.control('', Validators.required);
  userName = this.fb.control('', Validators.required);
  phone = this.fb.control('', [Validators.required, Validators.pattern("[0-9 ]{12}")]);
  email = this.fb.control('', [Validators.required, Validators.email]);
  updateForm: FormGroup = this.fb.group({
    firstName: this.firstName,
    lastName: this.lastName,
    userName: this.userName,
    phone: this.phone,
    email: this.email
  });


  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUsersById(this.id).subscribe(
      data => {
        this.user = data;
        this.updateForm.patchValue(data) 
      });  
  }

  updateUser() {
    this.userService.updateUser(this.updateForm.value, this.user.id).subscribe(
      () => {
        this.goToList();
      }
    )
  }


  goToList() {
    this.router.navigate(['/user-info']);
  }


}
