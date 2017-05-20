import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connact',
  templateUrl: './connact.component.html',
  styleUrls: ['./connact.component.css']
})
export class ConnactComponent implements OnInit {
  name:string;
  phone:number;
  constructor() {
  	this.name="尹鹏孝",
  	this.phone=18810620062
	
   }
  


  ngOnInit() {
  }

}
