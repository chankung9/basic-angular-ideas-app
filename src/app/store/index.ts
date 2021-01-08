import { ActionReducerMap } from '@ngrx/store';

import { errorReducer, ErrorState } from '@app/store/error.reducer';

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
};

export interface AppState {
  error: ErrorState;
}