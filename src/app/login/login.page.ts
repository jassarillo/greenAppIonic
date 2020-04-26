import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //txt: any;
  public thedata: any;
  constructor(public loginService: LoginService, public router: Router ) { 
    /*this.loginService.loginService()
    .then(data => {
      this.thedata = data;
      console.log(this.thedata);
    });*/
   

  }

  ngOnInit() {
  }

  username: string;
  password: string;
  onSubmitLogin()
  {
    //console.log("estas en el login event");
    this.loginService.loginService(this.username, this.password)
    .then(data => {

      if (data == '1') {
        this.router.navigate(['/eventos']);  
    } else {
       alert("usuario/contraseña invalido");
    }
      
      //this.thedata = data;

      //console.log(this.thedata);
    })
  }

/*  processLogin(email: string, password: string){

    this.loginService.loginService()
    .then(data => {
      this.thedata = data;
      console.log(this.thedata);
    });

  }*/
}
