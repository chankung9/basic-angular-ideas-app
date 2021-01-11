import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Idea } from '@app/models/idea';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../state';
import { DownvoteIdea, LoadIdeas, UpvoteIdea } from '../state/idea.action';
import { selectAllIdeas, selectIdeaLoader } from '../state/idea.selector';
import { User } from '@app/models/user';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  ideas!: Observable<Idea[]>;
  loader!: Observable<boolean>;
  auth$!: Subscription;
  currentUser!: User | null;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(LoadIdeas());
    this.ideas = this.store.select(selectAllIdeas);
    this.loader = this.store.select(selectIdeaLoader);
    this.auth$ = this.store
      .select(state => state.auth.user)
      .subscribe(val => (this.currentUser = val));
  }

  upvote(id: string) {
    this.store.dispatch(UpvoteIdea({ idea: id }));
  }
  downvote(id: string) {
    this.store.dispatch(DownvoteIdea({ idea: id }));
  }

}
