import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }
  setUsersService(postData) {
      console.log(postData);
  /*
      return new Promise(resolve => {
        this.http.get('https://capa75.com.mx/dispensario.php/api/events').subscribe(data => {
           resolve(data);
        }, err =>{
        });
*/



return new Promise(resolve => {
    this.http.post("https://capa75.com.mx/dispensario.php/api/storeUser", postData).subscribe(data => {
       resolve(data);
    }, err =>{
        console.log(err);
    });


/*
       this.http.post("http://127.0.0.1:8000/api/storeUser", postData)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
*/

    });
  }
}
