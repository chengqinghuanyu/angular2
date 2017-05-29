import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginControl:FormControl=new FormControl("");
  loginForm:FormGroup;
  constructor() { 
  	this.loginForm =new FormGroup({
  		name:new FormControl(""),
  		password:new FormControl("")
  		})
  }

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
