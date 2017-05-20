import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-conunationnew',
  templateUrl: './conunationnew.component.html',
  styleUrls: ['./conunationnew.component.css']
})
export class ConunationnewComponent implements OnInit {
  names: Array<string>;
  listNew:any;
  list:any;
  constructor() { 
  this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  this.listNew = [
  		{
  			name:"张啊"
  		},
  		{
  			name:"刘啊"
  		},
  		{
  			name:"白啊"
  		}

  ]
  this.listNew = [
  		{
  			name:"李阳",
  			age:33,
  			hometoung:"sd"
  		},
  		{
  			name:"刘鹗",
  			age:23,
  			hometoung:"sd"
  		},
  		{
  			name:"张宏",
  			age:45,
  			hometoung:"sx"
  		},
  		{
  			name:"白起",
  			age:9999,
  			hometoung:"陕西"
  		}

  ];
}

  ngOnInit() {
  }
  clickMessage = '';
 
  onClickMe() {
    this.clickMessage = '菜鸟教程!';
  }

   values = '';
  // 强类型
  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

 

}
