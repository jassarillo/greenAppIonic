import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../servicios/productos.service'; 
import { Router } from "@angular/router";
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  
   lista: any[0];
  
  constructor(public productosService: ProductosService, public saveFavorites : ProductosService ,public router: Router ) {
    this.leerProductos();
    /*.then(data => {
    this.lista = data;
      console.log(this.lista);
    });*/
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
