import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { LoginComponent } from './components/login/login.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account-list', component: AccountListComponent },
  { path: 'add-account', component: AddAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-account/:id', component: EditAccountComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
