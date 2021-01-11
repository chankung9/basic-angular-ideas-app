import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { IdeaEditableComponent } from './components/idea-editable/idea-editable.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IdeaEditableComponent],
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    ToastModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    ToastModule,
    IdeaEditableComponent,
  ],
  providers: [
    MessageService
  ]
})
export class UIModule { }
