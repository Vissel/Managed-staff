import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class HttpGetService {

	constructor(
		private _httpClient: HttpClient
	) { }
	getAllData(api) {
		return this._httpClient.get(api)
			.pipe(catchError(this.errorHandler))

	}
	errorHandler(error: HttpErrorResponse) {
		return throwError(error.message || "Serve Error");
	}
}
