import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  account: Account;
  accountEditForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private accountSevice: AccountService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.accountEditForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required]
    });
    this.getAccount();
  }

  onSubmit() {
    this.submitted = true;
    if (this.accountEditForm.invalid) {
      return;
    }

    this.success = true;
    if (this.success) {
      this.account.name = this.accountEditForm.value.name;
      this.account.number = this.accountEditForm.value.number;
      this.updateAccount();
    }
    // TODO: Use EventEmitter with form value
  }

  goBack(): void {
    this.location.back();
  }

  getAccount(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountSevice.getAccount(id).subscribe(account => {
      this.account = account;
      this.accountEditForm.value.name = this.account.name;
      this.accountEditForm.setValue({
        name: this.account.name,
        number: this.account.number
      });
    });
  }

  updateAccount(): void {
    this.accountSevice.updateAccount(this.account).subscribe(() => this.goBack());
  }
}
