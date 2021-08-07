import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class TableService {

	private url = 'http://localhost:5000/api/v1/tables';

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(
		private httpClient: HttpClient,
	) {
	}

	getTables(): Observable<any> {
		return this.httpClient.get<any>(this.url)
	}

	patchReserveTable(id: any, name: string, date: Date): Observable<any> {
		const url = this.url + "/" + id;

		return this.httpClient.patch(url, { isTaken: true, name: name, dueDate: date }, this.httpOptions)
	}

	patchUnReserveTable(id: any): Observable<any> {
		const url = this.url + "/" + id;

		return this.httpClient.patch(url, { isTaken: false, name: "", dueDate: "" }, this.httpOptions)
	}

}