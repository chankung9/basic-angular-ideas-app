import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import { ApiService } from '@app/services/api.service';
import { AppState } from '.';
import { AddError, RemoveError } from '@app/store/actions/error.action';
import {
  CreateIdeaSuccess,
  IdeaActions,
  LoadIdeasSuccess,
  UpdateIdeaSuccess,
  DeleteIdeaSuccess,
  LoadIdeaSuccess,
  LoadIdea
} from './idea.action';
import { Idea } from '@app/models/idea';

@Injectable()
export class IdeaEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
  ) { }

  loadIdea$ = createEffect(() => this.actions$.pipe(
    ofType(IdeaActions.LOAD_IDEA),
    tap(() => this.store.dispatch(RemoveError())),
    withLatestFrom(this.store),
    mergeMap(([action, state]: [{ idea: string }, AppState]) => {
      const idea = state.ideas.ideas[action.idea];
      if (idea) {
        return of(LoadIdeaSuccess({ idea: undefined }));
      } else {
        return this.apiService.getIdea(idea)
          .pipe(
            map((idea: Idea) => LoadIdeaSuccess({ idea })),
            catchError(err => of(AddError({ error: err.error })))
          );
      }
    })
  ));

  loadIdeas$ = createEffect(() => this.actions$.pipe(
    ofType(IdeaActions.LOAD_IDEAS),
    tap(() => this.store.dispatch(RemoveError())),
    mergeMap(() => this.apiService.getIdeas()
      .pipe(
        map((ideas: Idea[]) => LoadIdeasSuccess({ ideas })),
        catchError(err => of(AddError({ error: err.error })))
      ))
  ));

  createIdea$ = createEffect(() => this.actions$.pipe(
    ofType(IdeaActions.CREATE_IDEA),
    tap(() => this.store.dispatch(RemoveError())),
    mergeMap(({ idea }) => this.apiService.createIdea(idea)
      .pipe(
        map(idea => CreateIdeaSuccess({ idea })),
        catchError(err => of(AddError({ error: err.error })))
      ))
  ));

  updateIdea$ = createEffect(() => this.actions$.pipe(
    ofType(IdeaActions.UPDATE_IDEA),
    tap(() => this.store.dispatch(RemoveError())),
    mergeMap(({ id, idea }) => this.apiService.updateIdea(id, idea)
      .pipe(
        map(idea => UpdateIdeaSuccess({ idea })),
        catchError(err => of(AddError({ error: err.error })))
      ))
  ));

  deleteIdea$ = createEffect(() => this.actions$.pipe(
    ofType(IdeaActions.DELETE_IDEA),
    tap(() => this.store.dispatch(RemoveError())),
    mergeMap(({ id }) => this.apiService.deleteIdea(id)
      .pipe(
        map(({ id: idea }) => DeleteIdeaSuccess({ idea })),
        catchError(err => of(AddError({ error: err.error })))
      ))
  ));
}
