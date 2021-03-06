import { createReducer, on } from '@ngrx/store';
import { AddError, RemoveError } from '@app/store/actions/error.action';

export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null
};

const _errorReducer = createReducer(
  initialState,
  on(AddError, (state, payload) => ({ ...state, error: payload.error })),
  on(RemoveError, (state) => ({ ...state, error: null })),
);

export function errorReducer(state: any, action: any) {
  return _errorReducer(state, action);
}
