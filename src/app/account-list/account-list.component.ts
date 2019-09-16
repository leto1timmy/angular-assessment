import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts: Account[];

  constructor(private accountSevice: AccountService) {}

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountSevice.getAccounts().subscribe(accounts => (this.accounts = accounts));
  }

  addAccount(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.accountSevice.addAccount({ name } as Account).subscribe(account => {
      this.accounts.push(account);
    });
  }

  delete(account: Account): void {
    this.accounts = this.accounts.filter(h => h !== account);
    this.accountSevice.deleteAccount(account).subscribe();
  }
}
