import { Idea } from '@app/models/idea';
import { createAction, props } from '@ngrx/store';

export enum IdeaActions {
  LOAD_IDEA = '[Idea] Load ideas',
  LOAD_IDEA_SUCCESS = '[Idea] Load ideas success',
}

export const LoadIdeas = createAction(IdeaActions.LOAD_IDEA);
export const LoadIdeasSuccess = createAction(IdeaActions.LOAD_IDEA_SUCCESS,
  props<{ ideas: Idea[] }>());
