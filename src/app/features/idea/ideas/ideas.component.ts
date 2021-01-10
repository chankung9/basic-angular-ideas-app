import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Idea } from '@app/models/idea';
import { Observable } from 'rxjs';
import { AppState } from '../state';
import { LoadIdeas } from '../state/idea.action';
import { selectAllIdeas } from '../state/idea.selector';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  ideas!: Observable<Idea[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(LoadIdeas());
    this.ideas = this.store.select(selectAllIdeas);
  }

}
