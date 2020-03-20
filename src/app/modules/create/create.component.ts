import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { compareValidator } from 'src/app/compare/compare-validator.directive';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  signupForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'phone': new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{12}")]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'confirmpassword': new FormControl(null, [Validators.required, compareValidator('password')])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    
  }

}
