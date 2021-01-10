import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ApiService } from '@app/services/api.service';
import { AppState } from '.';
import { AddError, RemoveError } from '@app/store/actions/error.action';
import { IdeaActions, LoadIdeas, LoadIdeasSuccess } from './idea.action';
import { User } from '@app/models/user';
import { Idea } from '@app/models/idea';

@Injectable()
export class IdeaEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private apiService: ApiService,
  ) { }

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(IdeaActions.LOAD_IDEA),
    tap(() => this.store.dispatch(RemoveError())),
    mergeMap(() => this.apiService.getIdeas()
      .pipe(
        map((ideas: Idea[]) => LoadIdeasSuccess({ ideas })),
        catchError(err => of(AddError({ error: err.error })))
      ))
  ));
}
