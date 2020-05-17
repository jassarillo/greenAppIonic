import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsProductPageRoutingModule } from './questionsProduct-routing.module';

import { QuestionsProduct } from './questionsProduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsProductPageRoutingModule
  ],
  declarations: [QuestionsProduct]
})
export class QuestionsProductPageModule {}
