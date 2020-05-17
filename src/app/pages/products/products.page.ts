import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../servicios/productos.service'; 
import { Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import { QuestionsProduct } from './modal/questionsProduct.page';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  
   lista: any[0];
  
  constructor(private modalController: ModalController, public productosService: ProductosService, public saveFavorites : ProductosService ,public router: Router ) {
    this.leerProductos();
    /*.then(data => {
    this.lista = data;
      console.log(this.lista);
    });*/
   }
   public lunch = {
     mainCourse: 'steak',
     desert: 'pudding'
   }
   public dinner: string;
  async openModal(){
    const modal = await this.modalController.create({
      component: QuestionsProduct
    });
    return await modal.present();
  }

  async openModalWithData(){
    const modal = await this.modalController.create({
      component: QuestionsProduct,
      componentProps: {
        lunch: this.lunch
      }
    });
    modal.onWillDismiss().then(dataReturned => {
      this.dinner = dataReturned.data;
      console.log('Receive: ', this.dinner);
    });

    return await modal.present().then(_ =>{
      console.log('Sending: ',this.lunch);
    });
  }

   leerProductos()
   {
    this.productosService.getProductoService().then(
      data =>{ 
       this.lista = data;
       console.log(this.lista);
      });
    
   }
  //idProduct: string;
  idUser: string;
   onSubmitMyHeart(id:string)
  {
    //console.log("estas en el HEART event: " + id);
    document.getElementById('heart_'+id).setAttribute('color','danger');
    //color="danger"

    this.saveFavorites.saveFavorites(id, this.idUser)
    .then(data => {

      if (data > 1) {
        alert("agregado a favoritos!");
    } else {
       alert("Error");
    }
      
      //this.thedata = data;

      //console.log(this.thedata);
    })
  }
  ngOnInit() {
   
  }

}
