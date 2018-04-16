import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BarcodeGuard } from './services/barcode-guard.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { RegisterComponent } from './user/register/register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BarcodeGuard]
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [BarcodeGuard]
  },
  {
    path: 'users/register',
    component: RegisterComponent,
    canActivate: [BarcodeGuard]
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
    canActivate: [BarcodeGuard]
  },
  {
    path: 'users/details/:id',
    component: UserDetailsComponent,
    canActivate: [BarcodeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class BarcodeRoutingModule {}