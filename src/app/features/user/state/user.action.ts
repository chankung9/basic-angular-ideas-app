import { User } from '@app/models/user';
import { createAction, props } from '@ngrx/store';

export enum UserActions {
  LOAD_USER = '[Users] Load users',
  LOAD_USER_SUCCESS = '[Users] Load users success'
}

export const LoadUsers = createAction(UserActions.LOAD_USER);
export const LoadUsersSuccess = createAction(UserActions.LOAD_USER_SUCCESS,
  props<{ users: User[] }>());
