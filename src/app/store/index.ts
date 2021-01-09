import { ActionReducerMap } from '@ngrx/store';

import { errorReducer, ErrorState } from '@app/store/reducers/error.reducer';
import { authReducer, AuthState } from './reducers/auth.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './reducers/router.reducer';

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  auth: authReducer,
  router: routerReducer
};

export interface AppState {
  error: ErrorState;
  auth: AuthState;
  router: RouterReducerState<RouterStateUrl>;
}
