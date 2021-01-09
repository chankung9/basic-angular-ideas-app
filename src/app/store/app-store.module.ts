import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from '@app/store';
import { AuthEffects } from '@app/store/effects/auth.effetcs';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './reducers/router.reducer';

export const effects = [AuthEffects];
@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    })
  ]
})
export class AppStoreModule { }
