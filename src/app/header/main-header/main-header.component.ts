import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit{
  ngOnInit(): void {
    const options={
      strings:['Front-end','Back-end','Full-stack','java','developer'],
      typeSpeed:150,
      backSpeed:150,
      loop:true
    };
    const typed=new Typed('.text',options);
  }

}
