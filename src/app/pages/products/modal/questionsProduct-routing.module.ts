import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsProduct } from './questionsProduct.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionsProduct
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsProductPageRoutingModule {}