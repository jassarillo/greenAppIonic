import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../servicios/productos.service'; 
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  lista: any[0];
  private rocketsApi = 'https://launchlibrary.net/1.4/';
  public nextLaunches$: Observable<any> = null;
  constructor(public getFavorites : ProductosService, private httpClient: HttpClient) { 
    //this.leerFavoritos();
  }

  ngOnInit() {
   
   this.leerFavoritos();
   //this.readFavorits();
    
  }
/*
  private readFavorits(){
   const url = this.rocketsApi  + 'launch/next/5';
   this.nextLaunches$ = this.httpClient.get<any>(url);
  }*/

  leerFavoritos()
  { 
    this.getFavorites.getFavorites().then(
      data =>{ 
       this.lista = data;
       console.log(this.lista);
      });
  }

 
}
