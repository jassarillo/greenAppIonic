import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public http: HttpClient) { }
  getProductoService() {
    return new Promise(resolve => {
      
      //this.http.get('http://201.144.84.105/api/loginServ/'+ username + '/' + password).subscribe(data => {
      //this.http.get('http://127.0.0.1:8000/api/products').subscribe(data => {
        this.http.get('https://capa75.com.mx/dispensario.php/api/events/').subscribe(data => {
           resolve(data);
           //console.log(data);
           //if(data == 0){ return break;}
        }, err =>{

        });
    });
  }

  saveFavorites(idProduct:string, idUser:string) {
    return new Promise(resolve => {
        this.http.get('https://capa75.com.mx/dispensario.php/api/saveFavorits/'+idProduct+'/1').subscribe(data => {
           resolve(data);
           //console.log(data);
           
        }, err =>{

        });
    });
  }
  getFavorites() {
    return new Promise(resolve => {
        this.http.get('https://capa75.com.mx/dispensario.php/api/getFavorits').subscribe(data => {
          
           resolve(data);
           //console.log(data);
           
        }, err =>{

        });
    });
  }
}
