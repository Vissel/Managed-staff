import { Injectable } from '@angular/core';
import { HttpClient,
		 HttpErrorResponse,
		 HttpResponse,
		 HttpHeaders,
		} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators';
import { Staff } from './../model/staff.class'

//headers
const httpOption = {
	header : new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': '',
	})
}

@Injectable({
	providedIn: 'root'
})
export class HttpGetService {


	constructor(
		private httpClient: HttpClient
	) { }


	getAll(api: string): Observable<HttpResponse<any[]>> {
		return this.httpClient.get<any[]>(api, { observe: "response" }).pipe(retry(3), catchError(this.errorHandle));


	}

	errorHandle(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}

		return throwError(error.message || "Serve Error");
	}
}
