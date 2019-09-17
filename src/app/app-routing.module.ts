import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { LoginComponent } from './login/login.component';
import { EditAccountComponent } from './edit-account/edit-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account-list', component: AccountListComponent },
  { path: 'add-account', component: AddAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-account/:id', component: EditAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
