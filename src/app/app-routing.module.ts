import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { MainComponent } from './modules/main/main.component';
import { UserinfoComponent } from './modules/userinfo/userinfo.component';
import { CreateComponent } from './modules/create/create.component';
import { AddressComponent } from './modules/address/address.component';
import { UserComponent } from './modules/user/user.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: MainComponent
  }, {
    path: 'userinfo',
    component: UserinfoComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'address',
    component: AddressComponent
  },
  {
    path: 'user',
    component: UserComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
