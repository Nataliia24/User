import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formCheck :any  = '';
  public onFormGroupCreateEvent(event) {
    this.formCheck = event;
    console.error(event, this.formCheck['controls'])
  }

  public onFormGroupCreateAddress(event) {
    this.formCheck = event;
    console.error(event, this.formCheck['controls'])
  }

  constructor() { }

  ngOnInit(): void {
    
}
}
