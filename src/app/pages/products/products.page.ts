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
  
  constructor(public productosService: ProductosService, public router: Router ) {
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
  ngOnInit() {
   
  }

}
