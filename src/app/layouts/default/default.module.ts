import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { MainComponent } from 'src/app/modules/main/main.component';
import { UserinfoComponent } from 'src/app/modules/userinfo/userinfo.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateComponent } from 'src/app/modules/create/create.component';
import { AddressComponent } from 'src/app/modules/address/address.component';
import { RegistrationComponent } from 'src/app/modules//registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { UpdateUserComponent } from 'src/app/modules/update-user/update-user.component';
import { UserFilterPipe } from 'src/app/modules/userinfo/user-filter.pipe';
import { DialogBoxComponent } from 'src/app/modules/dialog-box/dialog-box.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { RegisterComponent } from 'src/app/modules/register/register.component';

@NgModule({
  declarations: [
    DefaultComponent,
    MainComponent,
    UserinfoComponent,
    CreateComponent,
    AddressComponent,
    RegistrationComponent,
    UpdateUserComponent,
    UserFilterPipe,
    DialogBoxComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatStepperModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
],
entryComponents: [
  DialogBoxComponent
],
providers: [DataService, UserService],
})
export class DefaultModule { }
