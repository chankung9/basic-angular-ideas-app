import { createReducer, on } from '@ngrx/store';
import { UserState } from '.';
import { LoadUsers, LoadUsersSuccess } from './user.action';

const initialState: UserState = {
  users: [],
  loading: false,
  loaded: false
};

const _userReducer = createReducer(
  initialState,
  on(LoadUsers, (state) => ({ ...state, loaded: false, loading: true })),
  on(LoadUsersSuccess, (state, { users }) => ({ ...state, users, loaded: true, loading: false }))
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
