import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '@app/store';
import { LoginUser, SetInitialUser } from './store/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ideas-app';
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(
      SetInitialUser()
    );
  }
}
