import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-page-home',
    templateUrl: './questionsProduct.page.html',
    
})

export class QuestionsProduct implements OnInit {
    constructor( private modalController : ModalController) {}
  
    ngOnInit(){}

    async closeModal(){
        await this.modalController.dismiss();
    }
    
  }