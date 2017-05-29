import { Injectable } from '@angular/core';

@Injectable()
export class BrowserService {

  constructor() { 

  }
  public browserIs():any{
  	var explorer =navigator.userAgent ;
  	var browserType="";
	//ie 
	if (explorer.indexOf("MSIE") >= 0) {
		browserType = "ie";
	}
	//firefox 
	else if (explorer.indexOf("Firefox") >= 0) {
		browserType = "Firefox";
	}
	//Chrome
	else if(explorer.indexOf("Chrome") >= 0){
		browserType = "Chrome";
	}
	//Opera
	else if(explorer.indexOf("Opera") >= 0){
		browserType = "Opera";
	}
	//Safari
	else if(explorer.indexOf("Safari") >= 0){
		browserType = "Safari";
	} 
	//Netscape
	else if(explorer.indexOf("Netscape")>= 0) { 
		browserType = "Netscape";
	} 
	if(browserType.length){
		return browserType;
	}else{
		return browserType="暂未查找到浏览器名称";
	}
	
  }


}
