import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { AuthActionTypes, LoginUser, SetCurrentUser } from '@app/store/actions/auth.action';
import { AuthService } from '@app/services/auth.service';
import { User } from '@app/models/user';
import { AuthDTO } from '@app/models/auth';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) { }

  setInitialUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.SET_INITIAL_USER),
    mergeMap(() => this.authService.whoami()
      .pipe(
        map((user: User) => SetCurrentUser(user)),
        catchError(err => of(err))
      ))
  ));

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_USER),
    mergeMap((data: AuthDTO) => this.authService.login(data)
      .pipe(
        map((user: User) => SetCurrentUser(user)),
        catchError(err => of(err))
      ))
  ));

  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.REGISTER_USER),
    mergeMap((data: AuthDTO) => this.authService.register(data)
      .pipe(
        map((user: User) => SetCurrentUser(user)),
        catchError(err => of(err))
      ))
  ));
}
