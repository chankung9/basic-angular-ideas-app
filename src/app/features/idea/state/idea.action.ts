import { Idea, IdeaDTO } from '@app/models/idea';
import { createAction, props } from '@ngrx/store';

export enum IdeaActions {
  LOAD_IDEA = '[Idea] Load idea',
  LOAD_IDEA_SUCCESS = '[Idea] Load idea success',
  LOAD_IDEAS = '[Idea] Load ideas',
  LOAD_IDEAS_SUCCESS = '[Idea] Load ideas success',
  CREATE_IDEA = '[Idea] Create idea',
  CREATE_IDEA_SUCCESS = '[Idea] Create idea success',
  UPDATE_IDEA = '[Idea] Update idea',
  UPDATE_IDEA_SUCCESS = '[Idea] Update idea success',
  DELETE_IDEA = '[Idea] Delete idea',
  DELETE_IDEA_SUCCESS = '[Idea] Delete idea success',
  UPVOTE_IDEA = '[Idea] Upvote idea',
  DOWNVOTE_IDEA = '[Idea] Downvote idea'
}

export const LoadIdea = createAction(IdeaActions.LOAD_IDEA,
  props<{ idea: string }>());
export const LoadIdeaSuccess = createAction(IdeaActions.LOAD_IDEA_SUCCESS,
  props<{ idea?: Idea }>());
export const LoadIdeas = createAction(IdeaActions.LOAD_IDEAS);
export const LoadIdeasSuccess = createAction(IdeaActions.LOAD_IDEAS_SUCCESS,
  props<{ ideas: Idea[] }>());

export const CreateIdea = createAction(IdeaActions.CREATE_IDEA,
  props<{ idea: IdeaDTO }>());
export const CreateIdeaSuccess = createAction(IdeaActions.CREATE_IDEA_SUCCESS,
  props<{ idea: Idea }>());

export const UpdateIdea = createAction(IdeaActions.UPDATE_IDEA,
  props<{ idea: Partial<IdeaDTO> }>());
export const UpdateIdeaSuccess = createAction(IdeaActions.UPDATE_IDEA_SUCCESS,
  props<{ idea: Idea }>());

export const DeleteIdea = createAction(IdeaActions.DELETE_IDEA,
  props<{ idea: string }>());
export const DeleteIdeaSuccess = createAction(IdeaActions.DELETE_IDEA_SUCCESS,
  props<{ idea: string }>());

export const UpvoteIdea = createAction(IdeaActions.UPVOTE_IDEA,
  props<{ idea: string }>());
export const DownvoteIdea = createAction(IdeaActions.DOWNVOTE_IDEA,
  props<{ idea: string }>());
