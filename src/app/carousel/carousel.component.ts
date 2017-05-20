import { Component,EventEmitter,OnInit,Input,Output} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() contact:any={};
   age: number=0;
  @Output() onCollect = new EventEmitter<boolean>();
  collectTheContact(){
  	this.age=this.age+1;
  	console.log(this.age);
  }
  sliders:any
  constructor() {
  	this.sliders=[{
	  		src:"assets/images/nature/1.jpg",
	  		alt:1,
	  		title:"11",
			detail:"11-66"
  		},
  		{
			src:"assets/images/nature/2.jpg",
			alt:2,
			title:"22",
			detail:"22-66"
  		},
  		{
			src:"assets/images/nature/3.jpg",
			alt:3,
			title:"33",
			detail:"33-66"
  		},
  		{
			src:"assets/images/nature/4.jpg",
			alt:4,
			title:"44",
			detail:"44-66"
  		},
  		{
			src:"assets/images/nature/5.jpg",
			alt:5,
			title:"55",
			detail:"55-66"
  		},
  		{
			src:"assets/images/nature/6.jpg",
			alt:6,
			title:"66",
			detail:"66-66"
  		}
  		]
   }

  ngOnInit() {
  }

}
