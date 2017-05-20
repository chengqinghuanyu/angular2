import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dorpdowns',
  templateUrl: './dorpdowns.component.html',
  styleUrls: ['./dorpdowns.component.css']
})
export class DorpdownsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public items:string[] = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];
 
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

}
