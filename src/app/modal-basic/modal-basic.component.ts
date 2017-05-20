import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TabsetComponent } from 'ng2-bootstrap';


@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit {
  username:string;
  password:string;

  ngOnInit() {
  }
  public items: string[] = ['Item 1', 'Item 2', 'Item 3'];
 
  public status: any = {
    isFirstOpen: true,
    isOpen: false
  };
 
  public groups: any[] = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
 
  public addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }


  public alerts: any = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];
 
  public reset(): void {
    this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
  }

  public checkModel :any ={
  	left:false,
  	middle:false,
  	right:true
  }
 


  public dt: Date = new Date();
  public minDate: Date = void 0;
  public events: any[];
  public tomorrow: Date;
  public afterTomorrow: Date;
  public dateDisabled: {date: Date, mode: string}[];
  public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
    'shortDate'];
  public format: string = this.formats[0];
  public dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened: boolean = false;
 
  public constructor() {
  	this.username ="lixianshi";
  	this.password ="12345";
  	function submit():void{
  		//alert(111);
  	}
  	function c():void{
  		//alert("close");
  	}
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    (this.dateDisabled = []);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];
  }
 
  public getDate(): number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }
 
  public today(): void {
    this.dt = new Date();
  }
 
  public d20090824(): void {
    this.dt = moment('2009-08-24', 'YYYY-MM-DD')
      .toDate();
  }
 
  public disableTomorrow(): void {
    this.dateDisabled = [{date: this.tomorrow, mode: 'day'}];
  }
 
  // todo: implement custom class cases
  public getDayClass(date: any, mode: string): string {
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);
 
      for (let event of this.events) {
        let currentDay = new Date(event.date).setHours(0, 0, 0, 0);
 
        if (dayToCheck === currentDay) {
          return event.status;
        }
      }
    }
 
    return '';
  }
 
  public disabled(date: Date, mode: string): boolean {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  }
 
  public open(): void {
    this.opened = !this.opened;
  }
 
  public clear(): void {
    this.dt = void 0;
    this.dateDisabled = undefined;
  }
 
  public toggleMin(): void {
    this.dt = new Date(this.minDate.valueOf());
  }

 public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;
 
  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
 
  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  public max: number = 10;
  public rate: number = 7;
  public isReadonly: boolean = true;



}
