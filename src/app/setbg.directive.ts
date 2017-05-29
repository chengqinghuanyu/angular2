import { Directive ,ElementRef,Input,HostListener} from '@angular/core';
@Directive({
  selector: '[appSetbg]'
})
export class SetbgDirective {
/* @Input('appSetbg')
	backgroundColor:string;
  constructor(el:ElementRef) { 
  	el.nativeElement.style.backgroundColor = "yellow";
  }*/
private _defaultColor="yellow";
private el:HTMLElement;
/* @Input('appSetbg') set backgroundColor(colorName:string){
	this.setStyle(colorName);
} */
@Input('appSetbg')  backgroundColor:string;
constructor(el:ElementRef){

	this.el = el.nativeElement;
	this.setStyle(this._defaultColor);
}
@HostListener('click') onClick(){
	
	this.setStyle(this.backgroundColor || this._defaultColor);
}

private setStyle(color: string){
	this.el.style.backgroundColor = color;
	//this.el.style.color ="#fff"
}


}
