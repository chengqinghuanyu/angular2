import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _router:Router) {
  		setTimeout(()=>{
  			//_router.navigateByUrl('home');
  			},2000)
   }

  ngOnInit() {
  }

}
