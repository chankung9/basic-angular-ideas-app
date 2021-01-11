import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UIModule } from '@app/ui.module';
import { ideaReducer } from './state/idea.reducer';
import { IdeaEffects } from './state/idea.effects';
import { IdeasComponent } from './ideas/ideas.component';
import { EditIdeaComponent } from './edit-idea/edit-idea.component';
import { IdeaComponent } from './ideas/idea/idea.component';
import { SelectedIdeaComponent } from './selected-idea/selected-idea.component';
import { IdeaResolver } from './idea.resolver';
import { UUIDGuard } from '@app/services/uuid.guard';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { AuthService } from '@app/services/auth.service';


const routes: Routes = [
  {
    path: 'new',
    component: NewIdeaComponent,
    canActivate: [AuthService]
  },
  {
    path: ':id',
    component: SelectedIdeaComponent,
    canActivate: [UUIDGuard],
    resolve: { data: IdeaResolver }
  },
  // {
  //   path: ':id/edit',
  //   component: EditIdeaComponent,
  //   canActivate: [UUIDGuard, AuthService],
  //   resolve: { data: IdeaResolver }
  // },
  { path: '', component: IdeasComponent },
];

@NgModule({
  declarations: [IdeasComponent, IdeaComponent, SelectedIdeaComponent, NewIdeaComponent, EditIdeaComponent],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([IdeaEffects]),
    StoreModule.forFeature('ideas', ideaReducer)
  ],
  providers: [IdeaResolver]
})
export class IdeaModule { }
