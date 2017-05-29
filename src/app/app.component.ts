import { Component,OnInit,
} from '@angular/core';
const CAL_LIVES_NUM =9;
const lity = {
		name:"alice",
		numLives:CAL_LIVES_NUM
	} 
declare var $:any;   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
    
})

export class AppComponent {

  username: string;
  age: number;
  fruit: string;
  numberlarge:number;
  name:boolean;
  pois :number;
  greencolor:number;
  deer:number;
  nag:number[];
  constructor() {
  	let input:number[] = [1,2];
  	let [first,second] =input;
  	first=first+100;
    this.username = 'dreamapple';
    this.age = 22;
    this.fruit = 'apple';
    this.name = false;
    this.numberlarge = 1000;
    this.pois = lity.numLives;
    this.greencolor = funB(true,1000);
    this.deer = golden(100,100);
    this.nag = def([first,second]);
    function funB(con,x){
		if(!con){
			let x=100;
				return x;
			}
			return x;
	}

	function golden(x,y){
		return x+y;
	}

	function def(input){
		
		return input[0]+input[1];
	}



  }  
}


