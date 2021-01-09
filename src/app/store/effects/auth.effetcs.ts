import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import { AuthActionTypes, LoginUser, SetCurrentUser } from '@app/store/actions/auth.action';
import { AuthService } from '@app/services/auth.service';
import { User } from '@app/models/user';
import { AuthDTO } from '@app/models/auth';
import { AddError, RemoveError } from '../actions/error.action';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>) { }

  setInitialUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.SET_INITIAL_USER),
    tap(() => this.store.dispatch(RemoveError())),
    mergeMap(() => this.authService.whoami()
      .pipe(
        map((user: User) => SetCurrentUser({ user })),
        catchError(err => of(AddError({ error: err.error })))
      ))
  ));

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_USER),
    tap(() => this.store.dispatch(RemoveError())),
    mergeMap(({ user }) => this.authService.login(user)
      .pipe(
        map((user: User) => SetCurrentUser({ user })),
        catchError(err => of(AddError({ error: err.error })))
      ))
  ));

  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.REGISTER_USER),
    tap(() => this.store.dispatch(RemoveError())),
    mergeMap(({ user }) => this.authService.register(user)
      .pipe(
        map((user: User) => SetCurrentUser({ user })),
        catchError(err => of(AddError({ error: err.error })))
      ))
  ));
}
