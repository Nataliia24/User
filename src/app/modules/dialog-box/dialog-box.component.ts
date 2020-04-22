import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/users';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  action:string;
  local_data:any;

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: User) {
      console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
     }

     doAction(){
      this.dialogRef.close({data:this.local_data.id});
    }

    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }

  ngOnInit(): void {
  }

}