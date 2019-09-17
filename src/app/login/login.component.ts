import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  // username: string;
  // password: string;
  // ngOnInit() {}
  // login(): void {
  //   if (this.username == 'admin' && this.password == 'passowrd') {
  //     this.router.navigate(['home']);
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // }
}
