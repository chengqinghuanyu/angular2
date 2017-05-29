import { Directive,Input,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appStructure]'
})
export class StructureDirective {
	@Input('appStructure') 
	set condition(newCondition:boolean){
		if(!newCondition){
			this.viewContainer.createEmbeddedView(this.templateRef);

		}else{
			this.viewContainer.clear();
		}
	}
  constructor(private templateRef:TemplateRef<any>,
  	private viewContainer:ViewContainerRef) {

   }

}
