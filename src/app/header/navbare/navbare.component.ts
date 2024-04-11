import { Component } from '@angular/core';

@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.css']
})
export class NavbareComponent {
 isClick:boolean=false;
 onClick(){
   this.isClick=!this.isClick;
 }
}
