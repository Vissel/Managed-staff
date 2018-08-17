import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { 

  }
  checkLog(username:string,password:string,role:string):boolean{
	if(role=='admin'){
		if(username == 'grayi' && password =='grayi'){
			return true;
		}
	}
	else if(role=='user'){
		if(username == 'phuong' && password =='phuong'){
			return true;
		}
	}  	
	else if(role=='manager'){
		if(username == 'manager' && password =='manager'){
			return true;
		}
	}
	else
	return false;  	
  }
}
