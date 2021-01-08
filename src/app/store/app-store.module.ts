import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from '@app/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effetcs';

export const effects = [AuthEffects];
@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
  ]
})
export class AppStoreModule { }
