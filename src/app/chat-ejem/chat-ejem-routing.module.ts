import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatEjemPage } from './chat-ejem.page';

const routes: Routes = [
  {
    path: '',
    component: ChatEjemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatEjemPageRoutingModule {}
