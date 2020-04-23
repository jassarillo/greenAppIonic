import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(
    private router: Router,
    //private postPvdr: PostProvider,
    public loginService: LoginService
  ){}

  /*login(email:string, password:string){
    //this.loginService
  }*/
  
  processLogin(){

  }

}
