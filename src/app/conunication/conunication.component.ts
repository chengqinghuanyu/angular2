import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-conunication',
  templateUrl: './conunication.component.html',
  styleUrls: ['./conunication.component.css']
})
export class ConunicationComponent implements OnInit {
  @Input() input:string;
  constructor() { 
  		

  }

  ngOnInit() {
  }

}


