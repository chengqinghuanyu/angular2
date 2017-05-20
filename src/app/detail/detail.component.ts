import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
  //,outPuts:['clicks:goto']
})
export class DetailComponent implements OnInit {
 protected num:any =0;
 protected detial:any={
 	telNum:1881062789,
 	title:"尹鹏孝是个英雄",
 	style:"style"
 }    
 protected changeGreen:string="font14 green";
 protected showFooter:boolean=false;  
 protected canClick:boolean=false; 
 protected isLarge:boolean=true; 
 protected currentUser:any={
 	phoneNumber:18810634578
 }
 protected red:boolean=true;
 protected font14:boolean=false;  
 protected isTitle:boolean=false; 
 protected isSpecial:boolean=true;
 constructor() { 

  }
  ngOnInit() {


  }
  protected goDetail(e){
  	  let str:string = "你点击了我"+this.num+"下";
  		this.num = ++this.num;
  		//alert(str);
  		alert(e.target.value)
  }
  protected addCodeForPhoneNumber(e){
  	this.currentUser.phoneNumber= (this.currentUser.phoneNumber).toString().charAt(0) == "+" ? this.currentUser.phoneNumber:"+86"+this.currentUser.phoneNumber
  }
  protected setClass(){
  	let classes={
  		red:this.red,
  		font14:!this.font14,
  		title:this.isTitle
  	};
  	return classes;
  }
  protected setStyle(){
  	let styles={

  		'color': this.red ? 'red' : 'blue',
  		'font-size':!this.font14 ? '14px':'16px',
  		'font-weight':this.isSpecial ? 'bold':'normal'
  	};
  	return styles;
  }
  private collect:number[]=[];
  private contactName:string = "TimCook";
  private contctnews:any=[
  	{
  		name:111,
  		id:0,

  	},
  	{
  		name:222,
  		id:1,

  	},
  	{
  		name:333,
  		id:2,

  	}
  ];

  connetIt(e){
  		alert(e);
  }
   
}
