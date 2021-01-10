import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UIModule } from '@app/ui.module';
import { ideaReducer } from './state/idea.reducer';
import { IdeaEffects } from './state/idea.effects';
import { IdeasComponent } from './ideas/ideas.component';
import { IdeaComponent } from './ideas/idea/idea.component';

const routes: Routes = [
  // {
  //   path: 'new',
  //   component: NewIdeaComponent,
  //   canActivate: [AuthService]
  // },
  // {
  //   path: ':id',
  //   component: SelectedIdeaComponent,
  //   canActivate: [UUIDGuard],
  //   resolve: { data: IdeaResolver }
  // },
  // {
  //   path: ':id/edit',
  //   component: EditIdeaComponent,
  //   canActivate: [UUIDGuard, AuthService],
  //   resolve: { data: IdeaResolver }
  // },
  { path: '', component: IdeasComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [IdeasComponent, IdeaComponent],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([IdeaEffects]),
    StoreModule.forFeature('ideas', ideaReducer)
  ]
})
export class IdeaModule { }
