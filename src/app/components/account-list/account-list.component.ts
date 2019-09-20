import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts: Account[];
  currentUser: User;

  constructor(
    private accountSevice: AccountService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountSevice.getAccounts().subscribe(accounts => (this.accounts = accounts));
  }

  delete(account: Account): void {
    this.accounts = this.accounts.filter(h => h !== account);
    this.accountSevice.deleteAccount(account).subscribe();
  }
}
