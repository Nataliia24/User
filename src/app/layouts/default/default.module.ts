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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/modules/address/data.service';

@NgModule({
  declarations: [
    DefaultComponent,
    MainComponent,
    UserinfoComponent,
    CreateComponent,
    AddressComponent
    
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
    MatButtonModule,
    HttpClientModule
],
providers: [DataService],
})
export class DefaultModule { }
