import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { compareValidator } from 'src/app/compare/compare-validator.directive';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  signupForm: FormGroup;


  constructor(private http: HttpClient, public fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: ['']
    })
   }


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'userName': new FormControl(null, Validators.required),
      'phone': new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{12}")]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'confirmpassword': new FormControl(null, [Validators.required, compareValidator('password')])
    });
  }

  onSubmit() {
   var formData: any = new FormData();
   formData.append("firstName", this.signupForm.get('firstName').value);
   formData.append("lastName", this.signupForm.get('lastName').value);

  this.http.post('http://localhost:3000/Users', formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )

}
}
