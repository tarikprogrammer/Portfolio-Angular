import {Component, OnInit} from '@angular/core';
import Typed from "typed.js";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
    ngOnInit(): void {
       const options={
         strings:['My name is Tarik Belaid , I\'m 22 years old after obtaining my baccalaureate I decided to continue my study at ENSA MARRAKESH in computer science .'],
         typeSpeed:50,
         loop:true
       }
       const type=new Typed('.about-text',options);
    }

}
