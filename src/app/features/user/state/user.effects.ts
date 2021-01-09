import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ApiService } from '@app/services/api.service';
import { AppState } from '.';
import { AddError, RemoveError } from '@app/store/actions/error.action';
import { LoadUsersSuccess, UserActions } from './user.action';
import { User } from '@app/models/user';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
  ) { }

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.LOAD_USER),
    tap(() => this.store.dispatch(RemoveError())),
    mergeMap(() => this.apiService.getUsers()
      .pipe(
        map((users: User[]) => LoadUsersSuccess({ users })),
        catchError(err => of(AddError({ error: err.error })))
      ))
  ));
}
