import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class HttpDeleteService {

	constructor(
		private _httpClient: HttpClient
	) { }
	deleteProduct(api: string, id: number) {
		return this._httpClient.delete(`${api}/${id}`).pipe(catchError(this.errorHandler));
	}
	errorHandler(error: HttpErrorResponse) {
		return throwError(error.message || "Serve Error");
	}
}
