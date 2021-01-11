import { Component } from '@angular/core';
import { IdeaDTO } from '@app/models/idea';
import { Store } from '@ngrx/store';

import { AppState } from '../state';
import { CreateIdea } from '../state/idea.action';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.scss']
})
export class NewIdeaComponent {

  constructor(private store: Store<AppState>) { }

  submit(idea: IdeaDTO) {
    this.store.dispatch(CreateIdea({ idea }));
  }

}
