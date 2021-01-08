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
  loading: boolean;
  loaded: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  loaded: false
};

const _authReducer = createReducer(
  initialState,
  on(LoginUser, (state, payload) => ({ ...state, loading: true, loaded: false })),
  on(RegisterUser, (state, payload) => ({ ...state, loading: true, loaded: false })),
  on(SetInitialUser, (state) => ({ ...state })),
  on(SetCurrentUser, (state, payload) => {
    return { ...state, user: payload, loading: true, loaded: false };
  }),
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
