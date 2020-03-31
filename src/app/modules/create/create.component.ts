import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { compareValidator } from 'src/app/compare/compare-validator.directive';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Users } from '../user/users';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  signupForm: FormGroup;
  users: Users[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter();



  constructor(private http: HttpClient, public fb: FormBuilder, private userS: UserService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      'firstName': this.fb.control(null, Validators.required),
      'lastName': this.fb.control(null, Validators.required),
      'userName': this.fb.control(null, Validators.required),
      'phone': this.fb.control(null, [Validators.required, Validators.pattern("[0-9 ]{12}")]),
      'email': this.fb.control(null, [Validators.required, Validators.email]),
      'password': this.fb.control(null, Validators.required),
      'confirmpassword': this.fb.control(null, [Validators.required, compareValidator('password')])
    });
    

  }

  onSubmit(): void {
    const newUser: Users = {...this.signupForm.value};
    this.userS.createUser(newUser).subscribe(
    user => this.users.push(user)
    );
    
    this.submit.emit(this.signupForm.value);
}
}

