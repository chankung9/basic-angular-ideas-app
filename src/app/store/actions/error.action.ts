import { createAction, props } from '@ngrx/store';

export enum ErrorActions {
  ADD_ERROR = '[ERROR] Add Error',
  REMOVE_ERROR = '[ERROR] Remove Error'
}

export const AddError = createAction(ErrorActions.ADD_ERROR,
  props<{ error: any }>());
export const RemoveError = createAction(ErrorActions.REMOVE_ERROR);
