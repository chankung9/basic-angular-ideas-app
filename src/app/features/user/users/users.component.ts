import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state';
import { LoadUsers } from '../state/user.action';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: Observable<User[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(LoadUsers());
    this.users = this.store.select(({users: userState}) => {
      return userState.users;
    });
  }

}
