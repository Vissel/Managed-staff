import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError} from 'rxjs'
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpPostService {

  constructor(
	  private _httpClient: HttpClient) { }
  	addData(api,data) {
		return this._httpClient.post(api,data).pipe(catchError(this.errorHandler));
	
	}
	errorHandler(error: HttpErrorResponse){
		return throwError(error.message || "Serve Error");
	}


}
