import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthDTO } from '@app/models/auth';
import { AppState } from '@app/store';
import { LoginUser, RegisterUser } from '@app/store/actions/auth.action';
import { validateWhitespace } from '@app/utilities/validators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: this.fb.control('', [Validators.required, validateWhitespace]),
      password: this.fb.control('', [Validators.required, validateWhitespace])
    });
  }

  login() {
    const val = this.authForm.getRawValue() as AuthDTO;
    this.store.dispatch(LoginUser(val));
  }

  register() {
    const val = this.authForm.getRawValue() as AuthDTO;
    this.store.dispatch(RegisterUser(val));
  }
}
