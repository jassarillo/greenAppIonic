import { Component, OnInit } from '@angular/core';
import { UsersService } from './../servicios/users.service'; 
import { Router } from "@angular/router";



@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {

  todo = {}
  postData: string;
  logForm() {
    console.log(this.todo);
    this.storeUsersService();
  }

  constructor(public setUsersService : UsersService,  public router: Router ) {
    //setUsersService
    

   }

   ngOnInit() {
  }

   storeUsersService()
   {
 
    if(!this.todo['nombre']){
      console.log(this.todo['nombre']);
      alert("Nombre es requerido");
    }
    else if(!this.todo['correo']){
      alert("Email es requerido");
    }
    else if(this.todo['correo'] != this.todo['confirm_correo']){
      alert("Verificar correo");
    }
    else if(this.todo['contrasenia'] != this.todo['confirm_contrasenia']){
      alert(" Verificar password!");
    }
    else if(!this.todo['contrasenia']){
      alert("Password Requerido");
    }
    else
    {
      this.setUsersService.setUsersService(this.todo)
      .then(data => {
        //console.log(data);
        
        if (data > 1) {
          alert("Usuario Registrado");
        } else {
          alert("Ocurrió un error");
        }
        
      })
    }



  }

}
