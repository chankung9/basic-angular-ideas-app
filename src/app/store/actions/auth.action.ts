import { createAction, props, Action } from '@ngrx/store';

import { User } from '@app/models/user';
import { AuthDTO } from '@app/models/auth';

export enum AuthActionTypes {
  LOGIN_USER = '[AUTH] Login user',
  REGISTER_USER = '[AUTH] Register user',
  SET_INITIAL_USER = '[AUTH] Set initial user',
  SET_CURRENT_USER = '[AUTH] Set current user'
}

export const LoginUser = createAction(AuthActionTypes.LOGIN_USER,
  props<AuthDTO>());

export const RegisterUser = createAction(AuthActionTypes.REGISTER_USER,
  props<AuthDTO>());

export const SetInitialUser = createAction(AuthActionTypes.SET_INITIAL_USER, props<AuthDTO>());

export const SetCurrentUser = createAction(AuthActionTypes.SET_CURRENT_USER,
  props<User>());
