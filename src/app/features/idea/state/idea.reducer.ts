import { createReducer, on } from '@ngrx/store';
import { IdeaState } from '.';
import * as IdeaActions from './idea.action';

const initialState: IdeaState = {
  ideas: {},
  loading: false,
  loaded: false,
  selectedIdea: ''
};

const _ideaReducer = createReducer(
  initialState,
  on(IdeaActions.LoadIdea, (state, payload) => ({ ...state, selectedIdea: payload.idea, loaded: false, loading: true })),
  on(IdeaActions.LoadIdeas, (state) => ({ ...state, loaded: false, loading: true })),
  on(IdeaActions.CreateIdea, (state) => ({ ...state, loaded: false, loading: true })),
  on(IdeaActions.UpdateIdea, (state) => ({ ...state, loaded: false, loading: true })),
  on(IdeaActions.DeleteIdea, (state) => ({ ...state, loaded: false, loading: true })),
  on(IdeaActions.LoadIdeaSuccess, (state, payload) => {
    const ideas = payload.idea
      ? { ...state.ideas, [payload.idea.id]: payload.idea }
      : state.ideas;
    return { ...state, ideas, loaded: true, loading: false };
  }),
  on(IdeaActions.LoadIdeasSuccess, (state, payload) => {
    const ideas = payload.ideas.reduce(
      (acc, idea) => ({
        ...acc,
        [idea.id]: idea
      }),
      state.ideas
    );
    return { ...state, ideas, loaded: true, loading: false };
  }),
  on(IdeaActions.CreateIdeaSuccess, (state, { idea }) => {
    return {
      ...state,
      ideas: {
        ...state.ideas,
        [idea.id]: idea
      },
      loaded: true,
      loading: false
    };
  }),
  on(IdeaActions.UpdateIdeaSuccess, (state, { idea }) => {
    return {
      ...state,
      ideas: {
        ...state.ideas,
        [idea.id]: idea
      },
      loaded: true,
      loading: false
    };
  }),
  on(IdeaActions.DeleteIdeaSuccess, (state, { idea }) => {
    return {
      ...state,
      ideas: Object.keys(state.ideas)
        .filter(key => key !== idea)
        .reduce((acc, key) => ({ ...acc, key: state.ideas[key] })
          , {}),
      loaded: true,
      loading: false
    };
  }),
);

export function ideaReducer(state: any, action: any) {
  return _ideaReducer(state, action);
}
