import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatEjemPageRoutingModule } from './chat-ejem-routing.module';

import { ChatEjemPage } from './chat-ejem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatEjemPageRoutingModule
  ],
  declarations: [ChatEjemPage]
})
export class ChatEjemPageModule {}
