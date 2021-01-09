import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CommonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    ToastModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    ToastModule,
  ],
  providers: [
    MessageService
  ]
})
export class UIModule { }
