import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { compareValidator } from 'src/app/compare/compare-validator.directive';
import { User } from '../models/users';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  signupForm: FormGroup;
  

  @Output() sendUserMainInfo: EventEmitter<User> = new EventEmitter();

  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute,
    private userService: UserService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      'firstName': this.fb.control(null, Validators.required),
      'lastName': this.fb.control(null, Validators.required),
      'userName': this.fb.control(null, Validators.required),
      'phone': this.fb.control(null, [Validators.required, Validators.pattern("[0-9 ]{12}")]),
      'email': this.fb.control(null, [Validators.required, Validators.email]),
      'password': this.fb.control(null, [Validators.required, Validators.minLength(6)]),
      'confirmpassword': this.fb.control(null, [Validators.required, compareValidator('password')])
    });
  }

  onNextClick(): void {
     this.sendUserMainInfo.emit(this.signupForm.value);
    }
}

