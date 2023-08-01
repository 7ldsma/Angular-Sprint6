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



public activeIndex = 0;
public selectedImg = this.historyParts[0].img;

siguiente() {
  if (this.activeIndex < this.historyParts.length - 1) {
    this.activeIndex++;
    this.selectedImg = this.historyParts[this.activeIndex].img;
  }
}

anterior() {
  if (this.activeIndex > 0) {
    this.activeIndex--;
    this.selectedImg = this.historyParts[this.activeIndex].img;
  }
}


}
