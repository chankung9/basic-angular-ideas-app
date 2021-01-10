import { Entity } from '@app/models/entity';
import { Idea } from '@app/models/idea';
import * as Store from '@app/store';

export interface IdeaState {
  ideas: Entity<Idea>;
  loading: boolean;
  loaded: boolean;
}

export interface AppState extends Store.AppState {
  ideas: IdeaState;
}
