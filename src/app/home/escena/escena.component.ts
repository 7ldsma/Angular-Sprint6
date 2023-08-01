import { Component, Input } from '@angular/core';
import { Historia } from '../interfaces/historia.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})


export class EscenaComponent {

@Input()
public historyParts: Historia[] = [{
  part:"Hola esta es la historia",
  img: "./assets/img/1.jpg"
}];

@Input()
public activeIndex = 0;

}
