import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }
  loginService() {
    return new Promise(resolve => {
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
           resolve(data);
        }, err =>{

        });
    });
  }

}
