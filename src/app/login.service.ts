import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }
  loginService(username:string, password:string) {
    return new Promise(resolve => {
      
      //this.http.get('http://201.144.84.105/api/loginServ/'+ username + '/' + password).subscribe(data => {
      this.http.get('https://capa75.com.mx/dispensario.php/api/loginServ/'+ username + '/' + password).subscribe(data => {
           resolve(data);
           //console.log(data);
           //if(data == 0){ return break;}
        }, err =>{

        });
    });
  }

}
