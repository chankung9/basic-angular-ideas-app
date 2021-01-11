import { Component, OnDestroy, OnInit } from '@angular/core';
import { Idea } from '@app/models/idea';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../state';
import { selectCurrentIdea } from '../state/idea.selector';

@Component({
  selector: 'app-selected-idea',
  templateUrl: './selected-idea.component.html',
  styleUrls: ['./selected-idea.component.scss']
})
export class SelectedIdeaComponent implements OnInit, OnDestroy {
  private subscription$?: Subscription;
  idea?: Idea;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscription$ = this.store.select(selectCurrentIdea).subscribe(val => this.idea = val);
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }

}
