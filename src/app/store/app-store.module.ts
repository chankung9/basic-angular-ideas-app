import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from '@app/store';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers),
  ]
})
export class AppStoreModule { }
