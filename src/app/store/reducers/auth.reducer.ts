import { User } from '@app/models/user';
import {
  AuthActionTypes,
  LoginUser,
  RegisterUser,
  SetInitialUser,
  SetCurrentUser
} from '@app/store/actions/auth.action';
import { createReducer, on } from '@ngrx/store';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null
};

const _authReducer = createReducer(
  initialState,
  // on(LoginUser, (state, payload) => ({ ...state, user: payload })),
  // on(RegisterUser, (state, payload) => ({ ...state, user: payload })),
  // on(SetInitialUser, (state) => ({ ...state })),
  on(SetCurrentUser, (state, payload) => {
    return { ...state, user: payload };
  }),
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
