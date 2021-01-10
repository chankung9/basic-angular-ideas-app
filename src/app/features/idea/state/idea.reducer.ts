import { createReducer, on } from '@ngrx/store';
import { IdeaState } from '.';
import { LoadIdeas, LoadIdeasSuccess } from './idea.action';

const initialState: IdeaState = {
  ideas: {},
  loading: false,
  loaded: false
};

const _ideaReducer = createReducer(
  initialState,
  on(LoadIdeas, (state) => ({ ...state, loaded: false, loading: true })),
  on(LoadIdeasSuccess, (state, payload) => {
    const ideas = payload.ideas.reduce(
      (acc, idea) => ({
        ...acc,
        [idea.id]: idea
      }),
      state.ideas
    );
    return { ...state, ideas, loaded: true, loading: false };
  })
);

export function ideaReducer(state: any, action: any) {
  return _ideaReducer(state, action);
}
