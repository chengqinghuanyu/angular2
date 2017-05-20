import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private curContact:any={
  	sex:'female',
  	lock:true,
  	//interestValue:"阅读"
  }

  private interests:any[]=[
  	{
  		value:'reading',
  		display:'阅读',
  	},
  	{
  		value:'travel',
  		display:'旅游',
  	},
  	{
  		value:'sport',
  		display:'运动',
  	},
  ]

}
