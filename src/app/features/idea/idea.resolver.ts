import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { AppState } from './state';
import { LoadIdea } from './state/idea.action';

@Injectable()
export class IdeaResolver implements Resolve<void> {
  constructor(private store: Store<AppState>) { }
  resolve() {
    return this.store
      .select(state => state.router.state.params.id)
      .pipe(
        take(1),
        map(idea => {
          console.log('id', idea);
          this.store.dispatch(LoadIdea({idea}));
        })
      );
  }
}
