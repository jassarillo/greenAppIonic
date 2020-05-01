import { Component, OnInit } from '@angular/core';
import { EventosService } from './../servicios/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})

export class EventosPage implements OnInit {
  lista: any[0];
 public selectedIndex = 0;
  public appPages = [
    {
      title: 'Crear Usuario',
      url: '/adduser',
      icon: 'person-add'
    },
    {
      title: 'Productos',
      url: '/products',
      icon: 'list'
    },
    {
      title: 'Eventos',
      url: '/eventos',
      icon: 'heart'
    },
    /*{
      title: 'Comentarios',
      url: '/comentarios',
      icon: 'archive'
    },*/
    {
      title: 'Ingresar',
      url: '/login',
      icon: 'enter'
    },
    {
      title: 'Chat',
      url: '/chat-ejem',
      icon: 'chatbubbles'
    }
  ];
  constructor(public eventosService: EventosService) { 
    this.leerEventos();
  }
  leerEventos()
  {
   this.eventosService.getEventosService().then(
     data =>{ 
      this.lista = data;
      console.log(this.lista);
     });
   
  }
  ngOnInit() {
  }

}
