import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conmunacationnew',
  templateUrl: './conmunacationnew.component.html',
  styleUrls: ['./conmunacationnew.component.css']
})
export class ConmunacationnewComponent implements OnInit {
  	data:string;
	constructor(){
		//this.data = 'parentnew'
	}
	ngOnInit(){
		this.data = 'parent'
	}

}
