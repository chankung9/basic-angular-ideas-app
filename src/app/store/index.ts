import { ActionReducerMap } from '@ngrx/store';

import { errorReducer, ErrorState } from '@app/store/reducers/error.reducer';
import { authReducer, AuthState } from './reducers/auth.reducer';

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  auth: authReducer
};

export interface AppState {
  error: ErrorState;
  auth: AuthState;
}
