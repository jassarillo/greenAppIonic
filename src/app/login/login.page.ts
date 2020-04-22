import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //txt: any;
  public thedata: any;
  constructor(public loginService: LoginService ) { 

    this.loginService.loginService()
    .then(data => {
      this.thedata = data;
      console.log(this.thedata);
    });
  }

  ngOnInit() {
  }

}
