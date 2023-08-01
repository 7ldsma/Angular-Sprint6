import { Component } from '@angular/core';
import { Historia } from './interfaces/historia.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public historyParts: Historia[] = [{
    part: "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
    img: "./assets/img/1.jpg",
  },{
    part: "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.",
    img: "./assets/img/2.jpg",
  },{
    part: "El héroe decidió atravesar la puerta que le llevaba a casa",
    img: "./assets/img/3.jpg",
  },{
    part: "Mientras tanto, otras heroes no tuvieron tanta suerte en su elección...",
    img: "./assets/img/4.jpg",
  }];

  public start:boolean = false;

comenzar() {
  this.start = true;
}


  

}
