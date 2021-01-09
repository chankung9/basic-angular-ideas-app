import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    InputTextModule,
    ToastModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    ToastModule,
  ],
  providers: [
    MessageService
  ]
})
export class UIModule { }
