import { Component, OnInit, Output ,
  trigger,
  state,
  style,
  transition,
  animate,ViewEncapsulation} from '@angular/core';
import { BrowserService} from '../browser.service';//使用服务查找浏览器类型
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css'],
  styles:[
      `.bat {
        width: 100px;
        height: 20px;
        background-color: #fff;
        font-size: 15px;
        border-radius: 4px;
        border:1px solid #d5d5d5;
        height:30px;
        line-height:30px;
        text-align:center;
      }`
  ],
  animations:[
    trigger('buttonStatus',[
    state('on', style({
        color:'#0f2',
        transform:'scale(1.2)',
        backgroundColor:"#077fff"
        })),
    state('off', style({
        color:'#0ff',
        transform:'scale(1)',
         backgroundColor:"#fff"
        })),
    transition('off => on',animate('100ms ease-in')),
    transition('on => off',animate('100ms ease-out'))

  ])
    ],
  providers:[BrowserService]
  //encapsulation:ViewEncapsulation.Native
  //encapsulation:ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
    status:string='on';
    toggleStatus(){
    this.status = (this.status === 'on')?'off':'on'
    }

    //contact:any = {
   // 	name:"尹鹏孝"
   // }
    detail:any = {};

    collectTheContact(){
    	this.detail.collection == 0?this.detail.collection =1:this.detail.collection=0;
    }
  constructor(private _browserService:BrowserService) { 
    console.log(this.browserIs());
    //return this.browserIs();
  }
  ngOnInit() {

  }
  public browserIs():any{
    return this._browserService.browserIs()
  }



}

