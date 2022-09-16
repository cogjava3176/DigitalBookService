import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
//const API_URL ="http://localhost:8091";
@Injectable({
  providedIn: 'root'
})

export class BookServiceService {
  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public createBook(){
    let endpoint = this.REST_API_SERVER + "/create"
    return this.httpClient.post(endpoint, null).pipe(catchError(this.handleError));
  }

  public getBookbyId(id:string){
    let endpoint = this.REST_API_SERVER + "/getBookById/"+id;
    return this.httpClient.get(endpoint).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
