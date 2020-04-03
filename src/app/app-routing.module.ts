import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { MainComponent } from './modules/main/main.component';
import { UserinfoComponent } from './modules/userinfo/userinfo.component';


import { RegistrationComponent } from './modules/registration/registration.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: MainComponent
  }, {
    path: 'userinfo',
    component: UserinfoComponent
  }, {
    path: 'create',
    component: RegistrationComponent
  },
  //{
    //path: 'create',
    //component: CreateComponent
  //},
  //{
    //path: 'address',
    //component: AddressComponent
 //},
  {
    path: 'user',
    component: UserinfoComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
