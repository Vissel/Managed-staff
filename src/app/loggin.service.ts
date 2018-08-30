import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { 

  }
  checkLog(username:string,password:string,role:string):boolean{
	if(role=='admin'){
		if(username == 'nguyenbanh1' && password =='nguyenbanh1'){
			return true;
		}
	}
	else if(role=='user'){
		if(username == 'user' && password =='user'){
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
