import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  newAccount: Account;
  accountMessageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) {}

  onSubmit() {
    this.submitted = true;
    console.log(this.accountMessageForm.controls.number);
    if (this.accountMessageForm.invalid) {
      return;
    }

    this.success = true;

    if (this.success) {
      this.newAccount = new Account();
      this.newAccount.name = this.accountMessageForm.value.name;
      this.newAccount.number = this.accountMessageForm.value.number;
      this.addAccount();
    }
  }

  ngOnInit() {
    this.accountMessageForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required]
    });
  }

  addAccount(): void {
    this.accountService.addAccount(this.newAccount).subscribe(ret => {
      console.log('Account created');
    });
  }
}
