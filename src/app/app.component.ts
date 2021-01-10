import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@app/store';
import { SetInitialUser } from './store/actions/auth.action';
import { MessageService } from 'primeng/api';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ideas-app';
  constructor(
    private store: Store<AppState>,
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.token) {
      this.store.dispatch(
        SetInitialUser()
      );
    }
    this.store.select((state: AppState) => state.error)
      .subscribe(val => this.showError(val.error));
  }

  showError(err: any) {
    if (err) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error Message',
        detail: err.message || 'Internal server error.'
      });
    }
  }
}
