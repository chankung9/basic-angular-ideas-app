import { createReducer, on } from '@ngrx/store';
import { AddError, RemoveError } from '@app/store/error.actions';

export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null
};

const _errorReducer = createReducer(
  initialState,
  on(AddError, (state, payload) => {
    console.log(state)
    return { ...state, error: payload }
  }),
  on(RemoveError, (state) => ({ ...state })),
);

export function errorReducer(state: any, action: any) {
  return _errorReducer(state, action);
}
