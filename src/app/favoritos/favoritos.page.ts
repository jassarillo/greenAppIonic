import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../servicios/productos.service'; 
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  lista: any[0];
  constructor(public getFavorites : ProductosService) { 
    this.leerFavoritos();
  }
  leerFavoritos()
  {
    this.getFavorites.getFavorites().then(
      data =>{ 
       this.lista = data;
       console.log(this.lista);
      });
  }

  ngOnInit() {
  }

}
